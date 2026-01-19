import { ApiResponse } from "../../utils/ApiResponse.js";
import {Certificate} from "../models/certificate.model.js";

/**
 * POST /certificates
 * Create a certificate
 */
export const createCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.create(req.body);
    res.status(201).json(certificate);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create certificate",
      error: error.message
    });
  }
};

/**
 * GET /certificates
 * Fetch all certificates
 */
export const getAllCertificates = async (req, res) => {
  try {
    const { title, issuer } = req.query;

    const filter = {};
    if (title) filter.title = { $regex: title, $options: "i" };
    if (issuer) filter.issuer = { $regex: issuer, $options: "i" };

    const certificates = await Certificate.find(filter);

    return res
      .status(200)
      .json(new ApiResponse (true, certificates, "Certificates fetched successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(false, error.message, "Failed to fetch certificates"));
  }
};


/**
 * PUT /certificates/:id
 * Update certificate
 */
export const updateCertificate = async (req, res) => {
  try {
    const updatedCertificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedCertificate) {
      return res.status(404).json(new ApiResponse(false, null, "Certificate not found"));
    }

    res.status(200).json(new ApiResponse(true, updatedCertificate, "Certificate updated successfully"));
  } catch (error) {
    res.status(400).json(new ApiResponse(false, error.message, "Failed to update certificate"));
  }
};

