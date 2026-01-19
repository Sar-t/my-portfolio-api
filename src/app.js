import express from 'express'
import cors from 'cors';

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173"
    ],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



import profileRoutes from './routes/profile.routes.js';
import projectRoutes from './routes/project.routes.js';
import workRoutes from './routes/work.routes.js';
import certificateRoutes from './routes/certificate.routes.js';
import skillRoutes from './routes/skill.routes.js';
import educationRoutes from './routes/education.routes.js';
import { ApiResponse } from '../utils/ApiResponse.js';

app.get("/me-api/health", (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, { status: "OK" }, "Service is healthy"));
});

app.use('/me-api/profile', profileRoutes);
app.use("/me-api/projects", projectRoutes);
app.use("/me-api/work", workRoutes);
app.use("/me-api/certificates", certificateRoutes);
app.use("/me-api/skills", skillRoutes);
app.use("/me-api/education", educationRoutes);

export default app;