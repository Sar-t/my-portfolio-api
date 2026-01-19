import { Router } from "express";

const router = Router();

import {
  getEducation,
  createEducation,
  updateEducation,
} from "../controllers/education.controller.js";

router.get("/", getEducation);
router.post("/", createEducation);
router.put("/:id", updateEducation);

export default router;