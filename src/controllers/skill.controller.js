import { Project } from "../models/project.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { Profile } from "../models/profile.model.js";

export const getTopSkills = async (req, res) => {
  try {
    const skills = await Project.aggregate([
      { $unwind: "$skills" },

      // normalize skill
      {
        $project: {
          skill: {
            $toLower: {
              $replaceAll: { input: "$skills", find: ".", replacement: "" }
            }
          }
        }
      },

      {
        $group: {
          _id: "$skill",
          count: { $sum: 1 }
        }
      },

      { $sort: { count: -1 } },
      { $limit: 5 },

      {
        $project: {
          _id: 0,
          skill: "$_id",
          count: 1
        }
      }
    ]);

    return res
      .status(200)
      .json(new ApiResponse(200, skills, "Top skills fetched successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Failed to fetch top skills"));
  }
};

/**
 * GET /skills
 * Aggregate skills from profile + projects
 */
export const getSkills = async (req, res) => {
  try {
    const skillMap = new Map();

    // 1️⃣ Profile skills
    const profile = await Profile.findOne();
    if (profile && Array.isArray(profile.skills)) {
      profile.skills.forEach((skill) => {
        const key = normalize(skill);
        skillMap.set(key, {
          skill,
          count: (skillMap.get(key)?.count || 0) + 1,
        });
      });
    }

    // 2️⃣ Project skills
    const projects = await Project.find();
    projects.forEach((project) => {
      project.skills.forEach((skill) => {
        const key = normalize(skill);
        skillMap.set(key, {
          skill,
          count: (skillMap.get(key)?.count || 0) + 1,
        });
      });
    });

    // 3️⃣ Convert to array & sort
    const skills = Array.from(skillMap.values()).sort(
      (a, b) => b.count - a.count
    );

    return res
      .status(200)
      .json(new ApiResponse(200, skills, "Skills fetched successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Failed to fetch skills"));
  }
};

/* =========================
   HELPER
========================= */
const normalize = (skill) =>
  skill.toLowerCase().replace(".", "").trim();

