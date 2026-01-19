# 🛠 Portfolio Backend API

Backend service powering my personal portfolio web application.  
Built using Node.js, Express, and MongoDB with a clean REST API design.

---

## 🚀 Features

- Profile management (create / read / update)
- Projects CRUD with advanced search & filters
- Skills aggregation & top-skills analysis
- Education, Work Experience & Certificates management
- Centralized API response handling
- Server health / liveness endpoint
- CORS & production-ready configuration

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST APIs
- MongoDB Aggregation Pipeline

---

## 📂 Project Structure
```bash
my-portfolio-api/
├── node_modules/                # Installed dependencies
│
├── src/                         # Application source code
│   ├── controllers/             # Route handlers
│   │   ├── profile.controller.js
│   │   ├── project.controller.js
│   │   ├── skill.controller.js
│   │   ├── education.controller.js
│   │   ├── certificate.controller.js
│   │   └── work.controller.js
│   │
│   ├── db/                      # Database connection logic
│   │   └── index.js
│   │
│   ├── models/                  # Mongoose schemas
│   │   ├── profile.model.js
│   │   ├── project.model.js
│   │   ├── education.model.js
│   │   ├── certificate.model.js
│   │   └── work.model.js
│   │
│   ├── routes/                  # API route definitions
│   │   ├── profile.routes.js
│   │   ├── project.routes.js
│   │   ├── skill.routes.js
│   │   ├── education.routes.js
│   │   ├── certificate.routes.js
│   │   └── work.routes.js
│   │
│   ├── scripts/                 
│   │   └── seed.js
│   │
│   ├── app.js                   # Express app configuration (middlewares & routes)
│   ├── constants.js             # Global constants (DB name)
│   └── index.js                 # Application entry point (server start)
│
├── utils/                       # Shared utilities
│   └── ApiResponse.js           # Standardized API response format
│
├── .env                         # Environment variables (ignored in git)
├── .env.example                 # Example env file for setup
├── .gitignore                   # Git ignore rules
├── package-lock.json
├── package.json
└── README.md                    # Project documentation
```

---

## 📡 API Endpoints (Overview)

### Health
- `GET /health` → Server liveness check

### Profile
- `GET /profile`
- `POST /profile`
- `PUT /profile`

### Projects
- `GET /projects`
- `POST /projects`
- `PUT /projects/:id`

### Skills
- `GET /skills`
- `GET /skills/top`

### Education
- `GET /education`
- `POST /education`
- `PUT /education/:id`

### Certificates
- `GET /certificates`
- `POST /certificates`
- `PUT /certificates/:id`

### Work
 - `GET /work`
 - `POST /work`
 - `PUT /work/:id`

---

## ⚙️ Local Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Sar-t/my-portfolio-api.git
cd my-portfolio-api
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Environment variables
Create `.env`:
```bash
MONGODB_URI=your_mongodb_atlas_uri
PORT=8000
```
### 4️⃣ Start server
```bash
npm run dev
```
Server runs at:
```bash
http://localhost:8000
```

---

## 🌐 Production Deployment
 - Hosted on Render
 - MongoDB hosted on MongoDB Atlas
Live API:
```bash
https://my-portfolio-api-312u.onrender.com/me-api
```

---

## 🔗 Related Repository
👉 Frontend:
https://github.com/Sar-t/my-portfolio-ui

---

## 👤 Author
Sarthak Tomar
