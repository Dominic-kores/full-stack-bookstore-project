// Import Express for creating the health-check route.
import express from "express";

// Create a new Express router.
const router = express.Router();

// Return the current status of the backend API.
router.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Nairobi Bookstore API is running.",
    timestamp: new Date().toISOString(),
  });
});

// Export the health router.
export default router;