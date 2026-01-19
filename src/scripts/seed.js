import mongoose from "mongoose";
import dotenv from "dotenv";

import {Profile} from "../models/profile.model.js";
import {Project} from "../models/project.model.js";
import {Certificate} from "../models/certificate.model.js";
import {Work} from "../models/work.model.js";
import { DB_NAME } from "../constants.js";

dotenv.config();

const seedDatabase = async () => {
  try {
    // 🔌 Connect to MongoDB
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB connected for seeding");

    // 🧹 Clear existing data
    await Profile.deleteMany({});
    await Project.deleteMany({});
    await Certificate.deleteMany({});
    await Work.deleteMany({});

    // 👤 Seed Profile (ONLY ONE)
    const profile = await Profile.create({
      name: "Sarthak Tomar",
      email: "sarthaktomar@email.com",
      education: "B.Tech Computer Science",
      skills: ["JavaScript", "Node.js", "Express", "MongoDB", "React"],
      workExperience: "fresher",
      links: {
        github: "https://github.com/your-username",
        linkedin: "https://linkedin.com/in/your-username",
        portfolio: "https://your-portfolio.com",
        resume: "https://link-to-resume.pdf"
      }
    });

    // 📦 Seed Projects
    await Project.insertMany([
      {
        title: "Blogging Web Application",
        description:
          "A full-stack blogging web application that allows users to create, edit, and publish blogs securely. The platform implements JWT-based authentication and authorization, RESTful APIs using Node.js and Express.js, and supports image uploads using Multer and Cloudinary. The frontend is built with React and Tailwind CSS, providing a responsive and user-friendly interface.",
        skills: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "JWT",
          "Multer",
          "Cloudinary",
          "Tailwind CSS"
        ],
        github: "https://github.com/your-username/blogging-app",
        live: null
      },
      {
        title: "HomeQuest — Room Finder Platform",
        description:
          "A rental listing and room-finder platform built with React that allows users to search and filter rental properties. Supabase is used for authentication and backend services, with PostgreSQL handling structured data storage. The application includes protected routes, dynamic filters, and responsive UI components.",
        skills: ["React", "Supabase", "PostgreSQL"],
        github: "https://github.com/your-username/homequest",
        live: null
      },
      {
        title: "Personal Portfolio API",
        description:
          "A backend-focused personal profile API that exposes professional details, projects, and skills through RESTful endpoints with filtering and search support. Designed as a minimal, production-style backend system.",
        skills: ["Node.js", "Express", "MongoDB"],
        github: "https://github.com/your-username/portfolio-api",
        live: null
      }
    ]);

    // 📜 Seed Certificates
    await Certificate.insertMany([
      {
        title: "Data Structures and Algorithms in C++",
        issuer: "Coding Ninjas",
        issueDate: new Date("2024-01-15"),
        expirationDate: null,
        link: "https://certificate-link.com"
      }
    ]);

    // 💼 Seed Work Experience (Optional but fine)
    await Work.insertMany([
      {
        role: "Software Engineering Intern",
        organisation: "Self / Academic Projects",
        empType: "Internship",
        startDate: new Date("2024-06-01"),
        endDate: null,
        currentlyWorking: true,
        description:
          "Worked on backend-heavy full-stack projects involving REST APIs, authentication, and database design using MongoDB and PostgreSQL.",
        location: "India",
        skills: ["Node.js", "MongoDB", "React", "Express"]
      }
    ]);

    console.log("🌱 Database seeded successfully");
    process.exit(0);

  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDatabase();
