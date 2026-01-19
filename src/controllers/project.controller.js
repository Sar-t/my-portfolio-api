import {Project} from "../models/project.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

/**
 * POST /projects
 * Create project
 */
export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);

    return res
      .status(201)
      .json(new ApiResponse(true, project, "Project created successfully"));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiResponse(false, error.message, "Failed to create project"));
  }
};

/**
 * GET /projects
 * GET /projects?skill=React
 */
export const getProjects = async (req, res) => {
  try {
    const { title, skill, description } = req.query;

    const filter = {};

    if (title) filter.title = { $regex: title, $options: "i" };
    if (description) filter.description = { $regex: description, $options: "i" };
    if (skill) {
    const normalizedSkill = skill.replace(".", "").toLowerCase();

    filter.skills = {
        $regex: new RegExp(normalizedSkill.split("").join("\\.?"), "i")
    };
    }

    const projects = await Project.find(filter);

    return res
      .status(200)
      .json(new ApiResponse(true, projects, "Projects fetched successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(false, error.message, "Failed to fetch projects"));
  }
};

/**
 * PUT /projects/:id
 * Update project
 */
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!project) {
      return res
        .status(404)
        .json(new ApiResponse(false, "Project not found"));
    }

    return res
      .status(200)
      .json(new ApiResponse(true, project, "Project updated successfully"));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiResponse(false, error.message, "Failed to update project"));
  }
};