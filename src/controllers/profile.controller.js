import { Profile } from "../models/profile.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

/**
 * GET /profile
 * Fetch profile
 */
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();

    if (!profile) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Profile not found"));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, profile, "Profile fetched successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Failed to fetch profile"));
  }
};

/**
 * POST /profile
 * Create profile (only once)
 */
export const createProfile = async (req, res) => {
  try {
    const existingProfile = await Profile.findOne();

    if (existingProfile) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "Profile already exists"));
    }

    const profile = await Profile.create(req.body);

    return res
      .status(201)
      .json(new ApiResponse(201, profile, "Profile created successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Failed to create profile"));
  }
};

/**
 * PUT /profile
 * Update profile
 */
export const updateProfile = async (req, res) => {
  try {
    const updatedProfile = await Profile.findOneAndUpdate(
      {},
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProfile) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Profile not found"));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, updatedProfile, "Profile updated successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Failed to update profile"));
  }
};
