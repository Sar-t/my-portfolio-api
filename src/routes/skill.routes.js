import express from "express";
import {getSkills, getTopSkills}  from "../controllers/skill.controller.js";

const router = express.Router();

router.get("/top", getTopSkills);
router.get("/", getSkills);

export default router;
