<div align="center">

# 🚀 CareerBoost AI

### *AI-Powered Resume Analyzer & Career Enhancement Platform*

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)

[![Frontend - Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://career-boost-ai-xi.vercel.app)
[![Backend - Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://careerboost-ai-g7vs.onrender.com)
[![Database - MongoDB Atlas](https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![AI - Gemini](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained-yes-green.svg?style=for-the-badge)](https://github.com/dharmiksoni15)

<br/>

> **🎯 Upload your resume. Paste the job description. Let Gemini AI do the rest.**

<br/>

[🌐 Live Demo](#-live-demo) · [📖 Documentation](#-api-documentation) · [🐛 Report Bug](https://github.com/dharmiksoni15) · [✨ Request Feature](https://github.com/dharmiksoni15)

</div>

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Project Highlights](#-professional-project-highlights)
- [Folder Structure](#-folder-structure)
- [System Architecture](#-system-architecture)
- [Project Workflow](#-project-workflow)
- [Installation Guide](#-installation-guide)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Security Features](#-security-features)
- [Deployment Architecture](#-deployment-architecture)
- [Challenges & Solutions](#-challenges-faced--solutions)
- [Key Learnings](#-key-learnings)
- [Screenshots](#-screenshots)
- [Future Enhancements](#-future-enhancements)
- [Resume-Worthy Impact](#-resume-worthy-impact)
- [Live Demo](#-live-demo)
- [Author](#-author)

---

## 🧭 Project Overview

### 🔴 Problem Statement

Job seekers spend hours tailoring resumes without knowing whether their resume actually aligns with the job description. Traditional resume reviews are slow, expensive, and subjective — leaving candidates unsure of where they stand before applying.

### ✅ Solution

**CareerBoost AI** automates resume analysis by combining the power of **Google Gemini AI** with a full-stack MERN application. Users upload their PDF resume, paste a job description, and receive instant, structured AI-powered feedback — including strengths, weaknesses, and actionable improvement suggestions.

### 💼 Business Value

| Value | Description |
|-------|-------------|
| ⏱️ Time Savings | Get resume feedback in seconds instead of days |
| 🎯 Precision Matching | AI evaluates resume-job compatibility with high accuracy |
| 💡 Actionable Insights | Receive specific, structured improvement suggestions |
| 🔒 Secure & Private | JWT-protected routes ensure data security |
| 🌍 Accessible Anywhere | Cloud-deployed — available 24/7 from any device |

### 🏢 Use Cases

- 🎓 **Fresh Graduates** tailoring resumes for their first job
- 💼 **Job Switchers** pivoting to a new industry or role
- 🧑‍💻 **Developers** optimizing their tech resumes for ATS systems
- 🏢 **Career Coaches** providing data-backed resume guidance

---

## ✨ Key Features

<details>
<summary>🔐 <strong>Authentication & Security</strong></summary>

<br/>

| Feature | Description |
|---------|-------------|
| 📝 User Registration | Secure account creation with hashed passwords |
| 🔑 User Login | Token-based authentication using JWT |
| 🛡️ JWT Security | Stateless, secure authentication on every request |
| 🚧 Protected Routes | Frontend and backend route guards |
| 🔒 Auth Middleware | Server-side authorization on all sensitive endpoints |

</details>

<details>
<summary>📄 <strong>Resume Management</strong></summary>

<br/>

| Feature | Description |
|---------|-------------|
| 📤 PDF Upload | Upload resume as a PDF file using Multer |
| 🔍 PDF Parsing | Automatic text extraction from uploaded PDFs |
| 💾 Resume Storage | Resume data securely stored in MongoDB Atlas |
| 🗂️ Resume Management | Access and manage previously uploaded resumes |

</details>

<details>
<summary>🤖 <strong>AI-Powered Analysis</strong></summary>

<br/>

| Feature | Description |
|---------|-------------|
| 🧠 Gemini Integration | Connected to Google Gemini API for NLP analysis |
| 📊 Resume Analysis | Deep analysis of resume content vs job description |
| ✅ Strength Detection | Identifies matching skills and achievements |
| ⚠️ Weakness Detection | Highlights missing keywords and skill gaps |
| 💡 Smart Suggestions | AI-generated, actionable improvement recommendations |
| 🎯 Match Evaluation | Overall resume-job compatibility score and rating |

</details>

<details>
<summary>🖥️ <strong>Dashboard & UI</strong></summary>

<br/>

| Feature | Description |
|---------|-------------|
| 🏠 Protected Dashboard | Secure, personalized user dashboard |
| 📱 Responsive Design | Fully responsive across desktop, tablet, and mobile |
| 🎨 Modern UI | Clean, professional interface built with Tailwind CSS |
| ⚡ Fast Performance | Vite-powered frontend for blazing-fast load times |

</details>

---

## 🏆 Professional Project Highlights

| Highlight | Details |
|-----------|---------|
| 🏗️ Full Stack Architecture | End-to-end MERN Stack with clean separation of concerns |
| 🤖 AI Integration | Google Gemini API integrated into a real-world production workflow |
| ☁️ Production Deployment | Frontend on Vercel, Backend on Render — independently deployed |
| 🔐 Auth System | Stateless JWT authentication with protected API routes |
| 🔄 Real-world Workflow | Resume upload → parse → analyze → display results |
| 🌐 REST APIs | Well-structured RESTful API endpoints with proper status codes |
| 🗄️ Cloud Hosting | MongoDB Atlas for scalable, cloud-native database hosting |

---

## 📁 Folder Structure

```text
CareerBoost-AI/
│
├── 📂 frontend/
│   │
│   ├── 📂 src/
│   │   │
│   │   ├── 📂 components/
│   │   │   ├── AnalysisResult.jsx
│   │   │   ├── JobDescriptionCard.jsx
│   │   │   └── ResumeUploadCard.jsx
│   │   │
│   │   ├── 📂 pages/
│   │   │   ├── AIAnalysis.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── UploadResume.jsx
│   │   │
│   │   ├── 📂 routes/
│   │   │   └── PrivateRoute.jsx
│   │   │
│   │   ├── 📂 services/
│   │   │   └── api.js
│   │   │
│   │   ├── 📂 utils/
│   │   │   └── (currently empty)
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── 📂 backend/
│   │
│   ├── 📂 config/
│   │   ├── db.js
│   │   └── gemini.js
│   │
│   ├── 📂 controllers/
│   │   ├── aiController.js
│   │   ├── analysisController.js
│   │   ├── authController.js
│   │   └── jobDescriptionController.js
│   │
│   ├── 📂 middleware/
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│   │
│   ├── 📂 models/
│   │   ├── JobDescription.js
│   │   ├── Resume.js
│   │   └── User.js
│   │
│   ├── 📂 routes/
│   │   ├── aiRoutes.js
│   │   ├── analysisRoutes.js
│   │   ├── authRoutes.js
│   │   ├── jobDescriptionRoutes.js
│   │   └── resumeRoutes.js
│   │
│   ├── 📂 utils/
│   │   ├── buildAnalysisPrompt.js
│   │   └── extractResumeText.js
│   │
│   ├── 📂 uploads/
│   │   └── uploaded PDF files
│   │
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

---

## 🏛️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                             │
│                                                                 │
│    👤 User  ──▶  🌐 React.js Frontend (Vite + Tailwind CSS)     │
│                         │                                       │
│                  React Router DOM                               │
│              (Public & Protected Routes)                        │
└─────────────────────────────┬───────────────────────────────────┘
                              │  HTTPS Requests (Axios)
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        SERVER LAYER                             │
│                                                                 │
│              ⚙️  Express.js REST API (Node.js)                  │
│                         │                                       │
│         ┌───────────────┼───────────────┐                       │
│         ▼               ▼               ▼                       │
│    Auth Routes    Resume Routes    Analysis Routes              │
│         │               │               │                       │
│         ▼               ▼               ▼                       │
│   JWT Middleware   Multer + PDF     Gemini Helper               │
│   (Authorization)   Parser                                      │
└──────────┬──────────────┬──────────────┬────────────────────────┘
           │              │              │
           ▼              ▼              ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────────────────┐
│              │  │              │  │                          │
│  🍃 MongoDB  │  │  📁 Uploads  │  │  🤖 Google Gemini API    │
│    Atlas     │  │   (Multer)   │  │   (AI Analysis Engine)   │
│              │  │              │  │                          │
│  Users       │  │  PDF Files   │  │  - Resume Analysis       │
│  Resumes     │  │  (Temporary) │  │  - Strength Detection    │
│  Analysis    │  │              │  │  - Weakness Detection    │
│              │  │              │  │  - Suggestions           │
└──────────────┘  └──────────────┘  └──────────────────────────┘
```

---

## 🔄 Project Workflow

```
┌─────────────────────────────────────────────────────┐
│                  USER JOURNEY                       │
└─────────────────────────────────────────────────────┘

   👤 User Visits App
          │
          ▼
   ┌─────────────┐     Already Registered?
   │  Register / │ ─────────────────────────▶ Login
   │   Sign Up   │                               │
   └─────────────┘                               │
          │                                      │
          └──────────────────────────────────────┘
                              │
                              ▼
                    🔑 JWT Token Issued
                              │
                              ▼
                  🏠 Protected Dashboard
                              │
                              ▼
                    📤 Upload PDF Resume
                              │
                              ▼
                    📝 Paste Job Description
                              │
                              ▼
                    🔍 PDF Text Extraction
                         (pdf-parse)
                              │
                              ▼
                    🧠 Build AI Prompt
                    (Resume + Job Desc)
                              │
                              ▼
                    🤖 Google Gemini API
                       Analysis Engine
                              │
                              ▼
               ┌──────────────┴──────────────┐
               ▼                             ▼
      ✅ Strengths &                 ⚠️ Weaknesses &
         Matches                       Gaps Found
               │                             │
               └──────────────┬──────────────┘
                              ▼
                    💡 AI Suggestions &
                       Recommendations
                              │
                              ▼
                    📊 Final Analysis
                       Displayed to User
```

---

## ⚙️ Installation Guide

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account
- [Google Gemini API Key](https://makersuite.google.com/app/apikey)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/dharmiksoni15/careerboost-ai.git
cd careerboost-ai
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Fill in your environment variables
npm run dev
```

The backend server will start at: `http://localhost:5000`

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
cp .env.example .env
# Add your VITE_API_URL
npm run dev
```

The frontend will be available at: `http://localhost:5173`

---

### 4️⃣ Run Full Project (Both Servers)

```bash
# Terminal 1 — Backend
cd backend && npm run dev

# Terminal 2 — Frontend
cd frontend && npm run dev
```

---

## 🔐 Environment Variables

### 🖥️ Backend — `/backend/.env`

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Port on which the Express server runs | `5000` |
| `MONGO_URI` | MongoDB Atlas connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Secret key for signing JWT tokens | `your_super_secret_key` |
| `GEMINI_API_KEY` | Google Gemini API key for AI analysis | `AIzaSy...` |

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/careerboost
JWT_SECRET=your_super_secret_jwt_key_here
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 🌐 Frontend — `/frontend/.env`

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Base URL of the backend API | `http://localhost:5000/api` |

```env
VITE_API_URL=https://careerboost-ai-g7vs.onrender.com/api
```

> ⚠️ **Never commit `.env` files to version control. Always add them to `.gitignore`.**

---

## 📚 API Documentation

### 🔐 Auth APIs — `/api/auth`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `POST` | `/api/auth/register` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Login and receive JWT token | ❌ |
| `GET` | `/api/auth/profile` | Get authenticated user profile | ✅ |

#### Example — Register

```json
POST /api/auth/register
Content-Type: application/json

{
  "name": "Dharmik Soni",
  "email": "dharmik@example.com",
  "password": "securepassword123"
}
```

```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### 📄 Resume APIs — `/api/resume`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `POST` | `/api/resume/upload` | Upload a PDF resume (multipart/form-data, field: `resume`) | ✅ |
| `GET` | `/api/resume/my` | Get all resumes uploaded by logged-in user | ✅ |

#### Example — Upload Resume

```
POST /api/resume/upload
Authorization: Bearer <JWT_TOKEN>
Content-Type: multipart/form-data

Body: resume = <pdf file>
```

```json
{
  "success": true,
  "message": "Resume uploaded and saved successfully",
  "resume": {
    "_id": "64abc123...",
    "user": "64xyz789...",
    "fileName": "resume-1234567890.pdf",
    "filePath": "uploads/resume-1234567890.pdf",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### 📋 Job Description APIs — `/api/job-description`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `POST` | `/api/job-description/create` | Create a new job description | ✅ |
| `GET` | `/api/job-description/my` | Get all job descriptions of logged-in user | ✅ |

#### Example — Create Job Description

```json
POST /api/job-description/create
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "title": "Full Stack Developer",
  "description": "We are looking for a Full Stack Developer with experience in React, Node.js..."
}
```

---

### 🧩 Analysis APIs — `/api/analysis`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `GET` | `/api/analysis/test` | Test if analysis route is working | ❌ |
| `POST` | `/api/analysis/prepare` | Prepare resume + job description data for AI analysis | ✅ |

#### Example — Prepare Analysis

```json
POST /api/analysis/prepare
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "resumeId": "64abc123...",
  "jobDescriptionId": "64def456..."
}
```

---

### 🤖 AI APIs — `/api/ai`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `GET` | `/api/ai/test` | Test Gemini API connection | ✅ |
| `POST` | `/api/ai/analyze` | Run AI analysis on resume vs job description | ✅ |

#### Example — AI Analysis Request

```json
POST /api/ai/analyze
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "resumeId": "64abc123...",
  "jobDescriptionId": "64def456..."
}
```

#### Example — AI Analysis Response

```json
{
  "success": true,
  "analysis": {
    "strengths": [
      "Strong experience with React.js and component architecture",
      "Relevant Node.js and Express.js backend experience"
    ],
    "weaknesses": [
      "Missing mention of TypeScript skills",
      "No mention of CI/CD or DevOps experience"
    ],
    "suggestions": [
      "Add TypeScript proficiency to your skills section",
      "Highlight any experience with GitHub Actions or Docker"
    ],
    "matchScore": "78%",
    "overallFeedback": "Your resume is a strong match for this role with a few targeted improvements."
  }
}
```

---

### 🛠️ Server Health

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:-------------:|
| `GET` | `/test-server` | Check if server is running | ❌ |

```json
{
  "success": true,
  "message": "Server is running correctly 🚀"
}
```

---

## 🛡️ Security Features

```
🔐 Security Architecture
─────────────────────────────────────────────
  ┌─────────────────────────────────────┐
  │         PASSWORD SECURITY           │
  │   bcrypt hashing before storage     │
  └───────────────┬─────────────────────┘
                  │
  ┌───────────────▼─────────────────────┐
  │         JWT AUTHENTICATION          │
  │   Signed tokens, expiry enforced    │
  └───────────────┬─────────────────────┘
                  │
  ┌───────────────▼─────────────────────┐
  │         AUTH MIDDLEWARE             │
  │   All private routes protected      │
  └───────────────┬─────────────────────┘
                  │
  ┌───────────────▼─────────────────────┐
  │         PRIVATE ROUTES              │
  │   Frontend redirect for unauth      │
  └───────────────┬─────────────────────┘
                  │
  ┌───────────────▼─────────────────────┐
  │         ENV VARIABLES               │
  │   Secrets never hardcoded           │
  └─────────────────────────────────────┘
```

| Security Layer | Implementation |
|----------------|----------------|
| 🔑 Password Hashing | `bcryptjs` — passwords never stored in plaintext |
| 🪙 JWT Tokens | `jsonwebtoken` — stateless, signed tokens with expiry |
| 🚧 Route Protection | `authMiddleware.js` — validates token on every private request |
| 🔒 Private Routes | Frontend `PrivateRoute` component redirects unauthenticated users |
| 🌱 Secrets Management | All secrets stored in `.env` files, excluded from version control |
| 🛡️ CORS Policy | Configured to only allow requests from whitelisted origins |

---

## ☁️ Deployment Architecture

```
┌──────────────────────────────────────────────────────┐
│                  PRODUCTION STACK                    │
└──────────────────────────────────────────────────────┘

  👤 User
    │
    ▼
  ┌──────────────────────┐
  │   🌐 Vercel (CDN)    │   ← Frontend (React + Vite)
  │ career-boost-ai-xi   │     Automatic deployments
  │    .vercel.app       │     from GitHub main branch
  └──────────┬───────────┘
             │ HTTPS API calls
             ▼
  ┌──────────────────────┐
  │  ⚙️  Render.com      │   ← Backend (Node + Express)
  │ careerboost-ai-g7vs  │     Auto-deploy on push
  │  .onrender.com       │     Free tier with spin-up
  └───────┬──────┬───────┘
          │      │
          ▼      ▼
  ┌───────────┐  ┌──────────────────┐
  │ 🍃 Mongo  │  │ 🤖 Gemini API    │
  │   Atlas   │  │  (Google Cloud)  │
  │  Cluster  │  │                  │
  └───────────┘  └──────────────────┘
```

| Service | Platform | Purpose |
|---------|----------|---------|
| 🌐 Frontend | [Vercel](https://vercel.com/) | Static frontend hosting with global CDN |
| ⚙️ Backend | [Render](https://render.com/) | Node.js server hosting with auto-deploy |
| 🗄️ Database | [MongoDB Atlas](https://www.mongodb.com/atlas) | Cloud-native MongoDB cluster |
| 🤖 AI Engine | [Google Gemini API](https://ai.google.dev/) | AI-powered resume analysis |

---

## 🧩 Challenges Faced & Solutions

### 1. 🌐 Deployment — Frontend Calling `localhost`

**Problem:** After deploying to Vercel, the frontend was still making API calls to `http://localhost:5000`, causing all requests to fail in production.

**Solution:**
```env
# frontend/.env.production
VITE_API_URL=https://careerboost-ai-g7vs.onrender.com/api
```

---

### 2. 🔐 JWT Route Protection

**Problem:** Authenticated routes were accessible without a valid token on both frontend and backend.

**Solution:**
```javascript
// Backend: middleware/authMiddleware.js
const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  next();
};
```
```jsx
// Frontend: routes/PrivateRoute.jsx
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};
```

---

### 3. 📄 PDF Parsing Issues

**Problem:** `pdf-parse` was throwing errors when processing certain PDF formats in newer Node environments.

**Solution:**
```javascript
// utils/extractResumeText.js
const pdfParse = require("pdf-parse");
const extractText = async (filePath) => {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(dataBuffer);
  return data.text;
};
```

---

### 4. 💾 Render Ephemeral Storage

**Problem:** Files uploaded to Render were lost on every deployment due to ephemeral storage.

**Solution (Implemented):** Files are processed immediately upon upload — text extracted before the process ends.

**Future Solution:**
```
Multer (memory storage) → Cloudinary / AWS S3
```

---

### 5. 🤖 Gemini Response Formatting

**Problem:** Gemini's raw responses were inconsistently formatted, making structured parsing difficult.

**Solution:**
```javascript
// utils/buildAnalysisPrompt.js
const prompt = `
Analyze the following resume against the job description.
Return ONLY a valid JSON object in this exact format:
{
  "strengths": ["..."],
  "weaknesses": ["..."],
  "suggestions": ["..."],
  "matchScore": "XX%",
  "overallFeedback": "..."
}
Resume: ${resumeText}
Job Description: ${jobDescription}
`;
```

---

### 6. 🐛 Production Debugging

**Problem:** Bugs surfaced only in production and were difficult to trace.

**Solution:** Combined Render's live log streaming with browser DevTools. Added structured `console.log` at every key step and wrapped all async operations in `try/catch` with descriptive error messages.

---

## 📖 Key Learnings

| # | Learning |
|---|----------|
| 1 | 🏗️ **MERN Stack Architecture** — Building a complete, scalable full-stack application end-to-end |
| 2 | 🔐 **JWT Authentication** — Implementing stateless, secure authentication from scratch |
| 3 | 🌐 **REST API Design** — Designing consistent APIs with proper HTTP methods and status codes |
| 4 | 🤖 **AI Integration** — Connecting and prompting Google Gemini API in a production workflow |
| 5 | ☁️ **Cloud Deployment** — Deploying frontend and backend independently to Vercel and Render |
| 6 | 🐛 **Production Debugging** — Diagnosing and fixing bugs that only appear in production |
| 7 | 🌱 **Environment Management** — Managing secrets and configs across dev and prod |
| 8 | 🔄 **Full Stack Lifecycle** — Owning design → build → deploy → debug end-to-end |

---

## 📸 Screenshots

> 🚧 *Screenshots will be added soon. Visit the [Live Demo](https://career-boost-ai-xi.vercel.app) to see the application in action.*

| Page | Description |
|------|-------------|
| 🔑 **Login Page** | Clean, minimal login form with JWT-based authentication |
| 📝 **Register Page** | User registration with validation and secure password handling |
| 🏠 **Dashboard** | Protected dashboard showing user resumes and analysis history |
| 📤 **Resume Upload** | PDF upload interface with real-time feedback |
| 📋 **Job Description** | Job description input form for resume-job matching |
| 📊 **AI Analysis Result** | Structured AI analysis displaying strengths, weaknesses, and suggestions |

---

## 🚀 Future Enhancements

| Priority | Feature | Description |
|----------|---------|-------------|
| 🔥 High | 🎯 ATS Score System | Simulate Applicant Tracking System scoring |
| 🔥 High | ☁️ Cloudinary Integration | Persistent cloud file storage for uploaded PDFs |
| ⭐ Medium | 🏗️ Resume Builder | AI-guided resume builder with live preview |
| ⭐ Medium | 📝 Cover Letter Generator | Auto-generate tailored cover letters from resume + JD |
| ⭐ Medium | 🎤 Interview Prep | AI-generated interview questions based on job role |
| 📌 Planned | 📈 Resume History | Full version history of uploaded resumes |
| 📌 Planned | 📥 Downloadable Reports | Export analysis results as PDF reports |
| 📌 Planned | 👨‍💼 Admin Dashboard | Admin panel for user and usage analytics |
| 💡 Idea | 🤖 AI Career Coach | Personalized career growth roadmap via AI |

---

## 🏅 Resume-Worthy Impact

```
✔  Built a production-ready MERN Stack application deployed on Vercel and Render
✔  Integrated Google Gemini AI into a real-world resume analysis workflow
✔  Implemented end-to-end JWT Authentication with protected frontend and backend routes
✔  Designed and documented 10+ RESTful API endpoints across 5 route modules
✔  Engineered a PDF upload and text extraction pipeline using Multer and pdf-parse
✔  Solved production deployment challenges including ephemeral storage and CORS issues
✔  Applied structured JSON prompting techniques for reliable AI response formatting
✔  Deployed and maintained a cloud-hosted full-stack application with 0 downtime releases
```

---

## 🌐 Live Demo

| Resource | Link |
|----------|------|
| 🌐 **Frontend (Vercel)** | [career-boost-ai-xi.vercel.app](https://career-boost-ai-xi.vercel.app) |
| ⚙️ **Backend (Render)** | [careerboost-ai-g7vs.onrender.com](https://careerboost-ai-g7vs.onrender.com) |
| 📂 **GitHub Repository** | [github.com/dharmiksoni15](https://github.com/dharmiksoni15) |

> ⚠️ *Note: The backend is hosted on Render's free tier — it may take 30–60 seconds to spin up on the first request after a period of inactivity.*

---

## 👨‍💻 Author

<div align="center">

**Dharmik Soni**

*Full Stack Developer | MERN Stack | AI Integration Enthusiast*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dharmiksoni15)

</div>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
MIT License — Free to use, modify, and distribute with attribution.
```

---

<div align="center">

**⭐ If you found this project useful, please consider giving it a star on GitHub — it means a lot and helps others discover it!**

[![GitHub stars](https://img.shields.io/github/stars/dharmiksoni15/careerboost-ai?style=social)](https://github.com/dharmiksoni15)

<br/>

*Made with ❤️ by [Dharmik Soni](https://github.com/dharmiksoni15)*

</div>
