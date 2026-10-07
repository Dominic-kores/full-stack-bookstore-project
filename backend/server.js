// Import Express to create the backend server.
import express from "express";

// Import CORS to allow frontend requests from another domain.
import cors from "cors";

// Import dotenv to read local environment variables.
import dotenv from "dotenv";

// Import bookstore API routes.
import bookRoutes from "./routes/books.js";
import categoryRoutes from "./routes/categories.js";
import healthRoutes from "./routes/health.js";

// Import custom middleware.
import logger from "./middleware/logger.js";
import {
  notFound,
  errorHandler,
} from "./middleware/errorHandler.js";

// Load variables from the local .env file.
dotenv.config();

// Create the Express application.
const app = express();

// Railway automatically supplies PORT in production.
const PORT = process.env.PORT || 5001;

// Define frontend URLs that are allowed to access the API.
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

// Configure CORS for local development and production.
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an origin such as curl or Thunder Client.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Reject requests from unknown websites.
      return callback(
        new Error(`CORS blocked request from ${origin}`)
      );
    },
  })
);

// Parse incoming JSON request bodies.
app.use(express.json());

// Run the custom logger for incoming requests.
app.use(logger);

// Display basic API information at the root route.
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Nairobi Bookstore API",
    status: "running",
    endpoints: {
      books: "/api/books",
      categories: "/api/categories",
      health: "/api/health",
    },
  });
});

// Connect the books routes.
app.use("/api/books", bookRoutes);

// Connect the category routes.
app.use("/api/categories", categoryRoutes);

// Connect the health-check route.
app.use("/api/health", healthRoutes);

// Handle routes that do not exist.
app.use(notFound);

// Handle application errors centrally.
app.use(errorHandler);

// Start the server using Railway's PORT or port 5001 locally.
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Bookstore API running on port ${PORT}`);
});