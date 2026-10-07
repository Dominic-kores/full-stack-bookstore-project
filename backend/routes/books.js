// routes/books.js

import express from "express";
import { books } from "../data/books.js";
import validateBook from "../middleware/validateBook.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| GET /api/books
|--------------------------------------------------------------------------
| Supports:
| - search
| - category filtering
| - sorting
| - pagination
|
| Examples:
| /api/books?search=ngugi
| /api/books?category=Fiction
| /api/books?page=1&limit=10
| /api/books?sort=price&order=asc
*/
router.get("/", (req, res) => {
  const {
    search = "",
    category = "",
    page = "1",
    limit = "10",
    sort = "",
    order = "asc",
  } = req.query;

  // Make a copy so the original in-memory array is not reordered.
  let filteredBooks = [...books];

  // ----------------------------------------------------------
  // Search by title OR author
  // ----------------------------------------------------------
  if (search.trim()) {
    const searchTerm = search.toLowerCase().trim();

    filteredBooks = filteredBooks.filter((book) => {
      return (
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
      );
    });
  }

  // ----------------------------------------------------------
  // Filter by category
  // ----------------------------------------------------------
  if (category.trim()) {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.category.toLowerCase() ===
        category.toLowerCase()
    );
  }

  // ----------------------------------------------------------
  // Sorting
  // ----------------------------------------------------------
  const allowedSortFields = [
    "price",
    "title",
    "author",
    "createdAt",
  ];

  if (sort && allowedSortFields.includes(sort)) {
    filteredBooks.sort((a, b) => {
      let firstValue = a[sort];
      let secondValue = b[sort];

      // Convert strings to lowercase for consistent sorting.
      if (typeof firstValue === "string") {
        firstValue = firstValue.toLowerCase();
        secondValue = secondValue.toLowerCase();
      }

      if (firstValue < secondValue) {
        return order === "desc" ? 1 : -1;
      }

      if (firstValue > secondValue) {
        return order === "desc" ? -1 : 1;
      }

      return 0;
    });
  }

  // ----------------------------------------------------------
  // Pagination
  // ----------------------------------------------------------
  const parsedPage = Math.max(Number.parseInt(page, 10) || 1, 1);

  const parsedLimit = Math.min(
    Math.max(Number.parseInt(limit, 10) || 10, 1),
    50
  );

  const total = filteredBooks.length;

  const totalPages =
    total === 0 ? 0 : Math.ceil(total / parsedLimit);

  const startIndex = (parsedPage - 1) * parsedLimit;

  const paginatedBooks = filteredBooks.slice(
    startIndex,
    startIndex + parsedLimit
  );

  // Response format required by the assignment.
  res.status(200).json({
    data: paginatedBooks,

    pagination: {
      page: parsedPage,
      limit: parsedLimit,
      total,
      totalPages,
    },
  });
});

/*
|--------------------------------------------------------------------------
| GET /api/books/:id
|--------------------------------------------------------------------------
| Return one book.
*/
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book not found.",
    });
  }

  res.status(200).json({
    data: book,
  });
});

/*
|--------------------------------------------------------------------------
| POST /api/books
|--------------------------------------------------------------------------
| Create a new book.
*/
router.post("/", validateBook, (req, res) => {
  // Prevent duplicate ISBN values.
  const existingBook = books.find(
    (book) =>
      book.isbn.toLowerCase() ===
      req.body.isbn.toLowerCase()
  );

  if (existingBook) {
    return res.status(409).json({
      success: false,
      message: "A book with this ISBN already exists.",
    });
  }

  // Generate the next numeric ID.
  const newId =
    books.length > 0
      ? Math.max(...books.map((book) => book.id)) + 1
      : 1;

  const newBook = {
    id: newId,
    title: req.body.title.trim(),
    author: req.body.author.trim(),
    isbn: req.body.isbn.trim(),
    price: req.body.price,
    category: req.body.category,
    description: req.body.description.trim(),
    coverImage: req.body.coverImage.trim(),
    inStock: req.body.inStock,

    // createdAt is controlled by the server.
    createdAt: new Date().toISOString(),
  };

  books.push(newBook);

  res.status(201).json({
    success: true,
    message: "Book created successfully.",
    data: newBook,
  });
});

/*
|--------------------------------------------------------------------------
| PUT /api/books/:id
|--------------------------------------------------------------------------
| Replace/update an existing book.
*/
router.put("/:id", validateBook, (req, res) => {
  const id = Number(req.params.id);

  const bookIndex = books.findIndex(
    (book) => book.id === id
  );

  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Book not found.",
    });
  }

  // Check whether another book already uses the submitted ISBN.
  const duplicateISBN = books.find(
    (book) =>
      book.id !== id &&
      book.isbn.toLowerCase() ===
        req.body.isbn.toLowerCase()
  );

  if (duplicateISBN) {
    return res.status(409).json({
      success: false,
      message: "Another book already uses this ISBN.",
    });
  }

  const updatedBook = {
    ...books[bookIndex],
    title: req.body.title.trim(),
    author: req.body.author.trim(),
    isbn: req.body.isbn.trim(),
    price: req.body.price,
    category: req.body.category,
    description: req.body.description.trim(),
    coverImage: req.body.coverImage.trim(),
    inStock: req.body.inStock,

    // Preserve original creation date.
    createdAt: books[bookIndex].createdAt,
  };

  books[bookIndex] = updatedBook;

  res.status(200).json({
    success: true,
    message: "Book updated successfully.",
    data: updatedBook,
  });
});

/*
|--------------------------------------------------------------------------
| DELETE /api/books/:id
|--------------------------------------------------------------------------
| Remove a book.
*/
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  const bookIndex = books.findIndex(
    (book) => book.id === id
  );

  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Book not found.",
    });
  }

  const deletedBook = books.splice(bookIndex, 1)[0];

  res.status(200).json({
    success: true,
    message: "Book deleted successfully.",
    data: deletedBook,
  });
});

export default router;