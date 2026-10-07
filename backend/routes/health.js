// routes/health.js

import express from "express";

const router = express.Router();

// A health endpoint is useful for deployment platforms such as Railway.
router.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Bookstore API is running.",
    timestamp: new Date().toISOString(),
  });
});

export default router;