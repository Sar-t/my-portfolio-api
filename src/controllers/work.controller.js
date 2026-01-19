import {Work} from "../models/work.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

/**
 * POST /work
 * Create work entry
 */
export const createWork = async (req, res) => {
  try {
    const work = await Work.create(req.body);

    return res
      .status(201)
      .json(new ApiResponse(true, work, "Work entry created successfully"));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiResponse(false, error.message, "Failed to create work entry"));
  }
};

/**
 * GET /work
 * Fetch all work entries
 */
export const getAllWork = async (req, res) => {
  try {
    const { role, organisation, location, empType } = req.query;

    const filter = {};

    if (role) filter.role = { $regex: role, $options: "i" };
    if (organisation) filter.organisation = { $regex: organisation, $options: "i" };
    if (location) filter.location = { $regex: location, $options: "i" };
    if (empType) filter.empType = { $regex: empType, $options: "i" };

    const work = await Work.find(filter);

    return res
      .status(200)
      .json(new ApiResponse(true, work, "Work fetched successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(false, error.message, "Failed to fetch work"));
  }
};

/**
 * PUT /work/:id
 * Update work entry
 */
export const updateWork = async (req, res) => {
  try {
    const work = await Work.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!work) {
      return res
        .status(404)
        .json(new ApiResponse(false, "Work entry not found"));
    }

    return res
      .status(200)
      .json(new ApiResponse(true, work, "Work entry updated successfully"));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiResponse(false, error.message, "Failed to update work entry"));
  }
};
