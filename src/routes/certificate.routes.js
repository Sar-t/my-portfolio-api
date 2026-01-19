import express from "express";
import {
  createCertificate,
  getAllCertificates,
  updateCertificate
} from "../controllers/certificate.controller.js";

const router = express.Router();

router.post("/", createCertificate);
router.get("/", getAllCertificates);
router.put("/:id", updateCertificate);
export default router;
