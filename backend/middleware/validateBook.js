// middleware/validateBook.js

import { categories } from "../data/books.js";

// Validate data sent when creating or replacing a book.
const validateBook = (req, res, next) => {
  const {
    title,
    author,
    isbn,
    price,
    category,
    description,
    coverImage,
    inStock,
  } = req.body;

  const errors = [];

  // Validate text fields.
  if (!title || typeof title !== "string") {
    errors.push("Title is required.");
  }

  if (!author || typeof author !== "string") {
    errors.push("Author is required.");
  }

  if (!isbn || typeof isbn !== "string") {
    errors.push("ISBN is required.");
  }

  // Price must be a positive number.
  if (
    typeof price !== "number" ||
    Number.isNaN(price) ||
    price < 0
  ) {
    errors.push("Price must be a positive number.");
  }

  // Category must match one of our supported categories.
  if (!category || !categories.includes(category)) {
    errors.push(
      `Category must be one of: ${categories.join(", ")}.`
    );
  }

  if (!description || typeof description !== "string") {
    errors.push("Description is required.");
  }

  if (!coverImage || typeof coverImage !== "string") {
    errors.push("Cover image is required.");
  }

  if (typeof inStock !== "boolean") {
    errors.push("inStock must be true or false.");
  }

  // Return all validation problems together.
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors,
    });
  }

  next();
};

export default validateBook;