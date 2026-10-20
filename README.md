<div align="center">

# ✨ Harshita Rathore — MERN Portfolio ✨

**A full-stack personal portfolio with animated UI, a live backend, and a MongoDB-powered contact form.**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-harshita--rathore.vercel.app-8C2A44?style=for-the-badge)](https://harshita-rathore.vercel.app)
[![Live API](https://img.shields.io/badge/⚙️_Live_API-onrender.com-3A0F1C?style=for-the-badge)](https://portfolio-w05x.onrender.com)

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=black)

</div>

---

## 📌 About the Project

This is my personal portfolio, built for the **MERN Stack course assignment**. It started as a plain HTML/CSS/JS site and was rebuilt as a full-stack app using **React, Node.js, Express and MongoDB**, then deployed live.

It showcases my skills, projects, education, certifications and hackathons, lets visitors **download my CV in PDF and Word**, and stores messages from the **contact form** in MongoDB.

## 🔗 Quick Links

| | Link |
|---|---|
| 🌐 **Live Website** | https://harshita-rathore.vercel.app |
| ⚙️ **Live API** | https://portfolio-w05x.onrender.com |
| 💻 **GitHub** | https://github.com/Harshitaarathore |
| 💼 **LinkedIn** | https://www.linkedin.com/in/harshita-rathore-72006531a |
| 🧩 **LeetCode** | https://leetcode.com/u/Harshita_Rathore/ |
| 📧 **Email** | rharshita175@gmail.com |

> ⏳ **Note:** The backend runs on Render's free tier, so the first request (CV download or contact form) can take **30 to 50 seconds** while the server wakes up.

---

## 🚀 Features

- 🎬 **Animated hero** with typewriter effect, letter-by-letter name reveal, and CV download buttons (PDF + Word)
- 👩‍💻 **About section** with profile photo, location and status, plus an animated word-search graphic
- 🫧 **Interactive skill bubbles**: size shows skill level, bubbles float, can be dragged, and show proficiency on hover
- 🗂️ **Projects showcase** with expandable cards, tech stack badges, GitHub and live demo links, and a **technology filter**
- 🕰️ **Animated vertical timeline** for education, hackathons and internship
- 🏆 **Certifications & achievements** section
- 📄 **CV download** in **PDF** and **Word (.docx)**, served from the Express backend
- ✉️ **Contact form** connected to Express and saved in **MongoDB** with Mongoose
- 🌗 **Dark / Light mode** toggle (remembered between visits)
- 📱 **Fully responsive** on mobile, tablet and desktop
- 📊 **Scroll progress bar**, scroll-triggered animations and smooth page transitions

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React, React Router, Framer Motion, CSS3 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas, Mongoose |
| **Tooling** | Vite, Git, GitHub, dotenv, CORS, Nodemon |
| **Deployment** | Vercel (frontend), Render (backend) |

---

## 📁 Folder Structure

```
portfolio/
├── client/                  # React frontend (Vite)
│   ├── public/              # profile.jpg, certificates, favicon
│   ├── src/
│   │   ├── components/      # Hero, About, Skills, Timeline, Navbar, Footer...
│   │   ├── pages/           # Home, Projects, Contact
│   │   ├── data.js          # Projects, timeline and certificate data
│   │   ├── config.js        # API base URL
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vercel.json          # Rewrites for React Router on Vercel
│
├── server/                  # Node + Express backend
│   ├── files/               # Resume PDF and DOCX
│   ├── models/              # Mongoose models (Message)
│   ├── routes/              # contact.js, resume.js
│   └── server.js
│
├── .gitignore
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Health check ("Portfolio API is running") |
| `POST` | `/api/contact` | Save a contact message to MongoDB |
| `GET` | `/api/resume/pdf` | Download resume as PDF |
| `GET` | `/api/resume/docx` | Download resume as Word (.docx) |

**Example request body for `POST /api/contact`:**

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "Hello Harshita!"
}
```

---

## 💻 Run Locally

### Prerequisites
- Node.js (v18 or newer)
- A free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Harshitaarathore/portfolio.git
cd portfolio
```

### 2️⃣ Start the backend
```bash
cd server
npm install
```
Create `server/.env`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```
Run it:
```bash
npm run dev
```

### 3️⃣ Start the frontend (new terminal)
```bash
cd client
npm install
```
Create `client/.env`:
```env
VITE_API_URL=http://localhost:5000
```
Run it:
```bash
npm run dev
```

### 4️⃣ Open the app
Go to **http://localhost:5173** 🎉

---

## 🔐 Environment Variables

| File | Variable | Purpose |
|---|---|---|
| `server/.env` | `PORT` | Port for the Express server |
| `server/.env` | `MONGO_URI` | MongoDB Atlas connection string |
| `server/.env` | `CLIENT_URL` | Allowed frontend origin (CORS) |
| `client/.env` | `VITE_API_URL` | Backend URL used by the React app |

> 🔒 `.env` files are listed in `.gitignore` and are **never pushed** to GitHub.

---

## ☁️ Deployment

- **Frontend:** Vercel, root directory `client`, with `VITE_API_URL` set to the Render URL
- **Backend:** Render, root directory `server`, build `npm install`, start `npm start`, with `MONGO_URI` and `CLIENT_URL` set as environment variables
- **Database:** MongoDB Atlas (free M0 cluster)

---

## 🎯 What I Learned

- Moving a static HTML/CSS/JS site to a **component-based React app** with routing
- Building a **REST API** with Express and storing data using **Mongoose**
- Serving files (PDF and DOCX) from a backend route
- Using **Framer Motion** for scroll, hover and entrance animations
- Handling **CORS**, **environment variables** and deploying a full-stack app on **Vercel + Render**

---

## 👩‍💻 Author

**Harshita Rathore**
B.Tech Computer Science, JK Lakshmipat University, Jaipur

[![GitHub](https://img.shields.io/badge/GitHub