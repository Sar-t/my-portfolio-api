import express from "express";
import {
  createWork,
  getAllWork,
  updateWork
} from "../controllers/work.controller.js";

const router = express.Router();

router.post("/", createWork);
router.get("/", getAllWork);
router.put("/:id", updateWork);
export default router;
