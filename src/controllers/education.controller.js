import { Education } from "../models/education.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

/**
 * GET /education
 */
export const getEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ startYear: -1 });

    return res
      .status(200)
      .json(new ApiResponse(200, education, "Education fetched successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Failed to fetch education"));
  }
};

/**
 * POST /education
 */
export const createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);

    return res
      .status(201)
      .json(new ApiResponse(201, education, "Education created successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Failed to create education"));
  }
};

export const updateEducation = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedEducation = await Education.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedEducation) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Education not found"));
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updatedEducation,
          "Education updated successfully"
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Failed to update education"));
  }
};
