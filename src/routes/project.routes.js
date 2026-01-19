import express from "express";
import {
  createProject,
  getProjects,
  updateProject
} from "../controllers/project.controller.js";


const router = express.Router();

router.post("/", createProject);
router.get("/", getProjects);
router.put("/:id", updateProject);
export default router;
