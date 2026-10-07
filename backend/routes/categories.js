// routes/categories.js

import express from "express";
import { categories } from "../data/books.js";

const router = express.Router();

// GET /api/categories
router.get("/", (req, res) => {
  res.status(200).json({
    data: categories,
  });
});

export default router;