# 💼 MERN Stack Job Seeker & Recruiter Portal

A powerful full-stack **Job Portal Web Application** built with the **MERN stack**, enabling recruiters to post jobs and job seekers to apply, track, and manage applications with an intuitive interface.

🎯 Live App: [Job Portal Demo](https://job-portal-by-yamini.onrender.com)

---

## ✨ Features

### 👥 User Roles
- **Job Seekers**: Register, log in, view jobs, apply, track applications
- **Recruiters**: Register, post new jobs, manage applications and responses

### 🔐 Authentication
- JWT-based login/signup
- Role-based dashboards
- Protected routes with token validation

### 📊 Dashboards
- **Recruiter View**: Post jobs, see applicants, manage jobs
- **Seeker View**: View applied jobs, upcoming interviews, status updates

### 📎 Other Highlights
- Clean and responsive UI (Tailwind CSS + MUI)
- Toast notifications for feedback
- Pagination for job listings
- Filters by category/location

---

## 🛠 Tech Stack

| Frontend | Backend | Database | Auth |
|----------|---------|----------|------|
| React.js | Node.js | MongoDB Atlas | JWT, bcrypt |
| Vite     | Express.js | Mongoose | Cookies/token |
| Tailwind CSS | Axios | Postman | Toastify |

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the Repo
```bash
git clone https://github.com/Yaminisah1/Job-Portal.git
cd Job-Portal
```

### 2. Backend Setup
```bash
cd server
npm install

# Create .env file:
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
```
```bash
npm run server
```

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
```

---

## 🗂 Folder Structure

```
├── client/               # React Frontend
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── server/               # Express Backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── server.js
```

---

## 🧪 Sample Users (for testing only)

| Role      | Email | Password |
|-----------|-------|----------|
| Recruiter | recruiter@demo.com | 123456 |
| Job Seeker| seeker@demo.com    | 123456 |

---

## 📸 Screenshots

- Recruiter dashboard view 📋
- Job posting page 📝
- Job seeker dashboard 📊
- Application tracking view 🔎

> *(Add actual images in repo if available)*

---

## 🙋‍♀️ Author

**Yamini Sah**  
[GitHub](https://github.com/Yaminisah1) • [LinkedIn](https://www.linkedin.com/in/yamini-sah-1bb28b259) • [Portfolio](https://portfolioyamini.netlify.app)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file.

---

## 🌟 Support

If you find this project helpful, don't forget to ⭐ the repo and share it!

> Built with 💼 and 💙 by Yamini Sah
