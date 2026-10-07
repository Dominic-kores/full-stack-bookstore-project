# 📚 Nairobi Bookstore Full-Stack Application

A full-stack bookstore application built with **React, Vite, Tailwind CSS, Node.js, and Express.js**.

The project demonstrates how a React frontend connects to an Express REST API. Users can browse books, search by title or author, filter by category, sort results, navigate through paginated data, and view individual book details.

---

## 🎯 Project Objectives

This project demonstrates:

- Building a REST API with Node.js and Express
- Connecting a React frontend to an Express backend
- Implementing CRUD operations
- Searching and filtering books
- Sorting and pagination
- Backend validation
- Express middleware
- Centralized error handling
- CORS configuration
- React Router navigation
- Responsive design using Tailwind CSS

---

## 🛠️ Technology Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Fetch API

### Backend
- Node.js
- Express.js
- CORS
- dotenv
- Nodemon

---

## 📁 Project Structure

```text
bookstore-fullstack/
│
├── backend/
│   ├── data/
│   │   └── books.js
│   ├── middleware/
│   │   ├── logger.js
│   │   ├── errorHandler.js
│   │   └── validateBook.js
│   ├── routes/
│   │   ├── books.js
│   │   ├── categories.js
│   │   └── health.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── books.js
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
└── README.md
```

---

## ✨ Main Features

- Browse bookstore catalogue
- Search by title or author
- Filter books by category
- Sort books by price, title, author, or date
- Pagination
- Individual book details page
- Loading and error states
- Responsive layout
- Backend data validation
- Request logging middleware
- Centralized error handling

---

## 🔄 Frontend and Backend Connection

The application follows this flow:

```text
User
 ↓
React Frontend
 ↓
fetch()
 ↓
Express API
 ↓
Book Data
 ↓
JSON Response
 ↓
React State
 ↓
Updated UI
```
---

## 🔐 Environment Variables

### Backend `.env`

```env
PORT=5001
FRONTEND_URL=http://localhost:5173
```

### Frontend `.env`

```env
VITE_API_BASE_URL=/api
```

---

## 🌐 Live Demo

### Frontend

```text
https://YOUR-PROJECT.vercel.app
```

### Backend API

```text
https://YOUR-BACKEND.up.railway.app
```

---

## 🧠 Key Learning Outcomes

Through this project, I developed practical experience in:

- React and Express integration
- REST API development
- CRUD operations
- HTTP requests and responses
- Search, filtering, sorting, and pagination
- React state management
- React Router
- Express middleware
- CORS
- Backend validation
- Responsive full-stack application development

---

## 👨‍💻 Author

**Dominic Kores Kisioya**

Full-Stack Software & AI Engineer 

