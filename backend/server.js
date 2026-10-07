// server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import bookRoutes from "./routes/books.js";
import categoryRoutes from "./routes/categories.js";
import healthRoutes from "./routes/health.js";

import logger from "./middleware/logger.js";
import {
  notFound,
  errorHandler,
} from "./middleware/errorHandler.js";

// Load variables from .env.
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

/*
|--------------------------------------------------------------------------
| CORS
|--------------------------------------------------------------------------
| CORS allows the React frontend and Express backend to communicate even
| when they run on different ports/domains.
*/
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Requests without an origin include tools such as curl/Postman.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error(`CORS blocked request from ${origin}`)
      );
    },
  })
);

/*
|--------------------------------------------------------------------------
| JSON middleware
|--------------------------------------------------------------------------
| Converts incoming JSON request bodies into JavaScript objects.
*/
app.use(express.json());

/*
|--------------------------------------------------------------------------
| Custom logging middleware
|--------------------------------------------------------------------------
*/
app.use(logger);

/*
|--------------------------------------------------------------------------
| API routes
|--------------------------------------------------------------------------
*/
app.use("/api/books", bookRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/health", healthRoutes);

/*
|--------------------------------------------------------------------------
| Home API route
|--------------------------------------------------------------------------
*/
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Kenyan Bookstore API",
    endpoints: {
      books: "/api/books",
      categories: "/api/categories",
      health: "/api/health",
    },
  });
});

/*
|--------------------------------------------------------------------------
| Error middleware
|--------------------------------------------------------------------------
| These must come after all normal routes.
*/
app.use(notFound);
app.use(errorHandler);

/*
|--------------------------------------------------------------------------
| Start server
|--------------------------------------------------------------------------
*/
app.listen(PORT, () => {
  console.log(
    `Bookstore API running on http://localhost:${PORT}`
  );
});