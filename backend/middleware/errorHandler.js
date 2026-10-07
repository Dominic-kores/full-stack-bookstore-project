// middleware/errorHandler.js

// Handles routes that do not exist.
export const notFound = (req, res, next) => {
  const error = new Error(
    `Route not found: ${req.method} ${req.originalUrl}`
  );

  res.status(404);

  next(error);
};

// Central error-handling middleware.
// Express recognises error middleware because it has four parameters.
export const errorHandler = (err, req, res, next) => {
  // If another middleware has already selected a status code,
  // keep it. Otherwise use 500 Internal Server Error.
  const statusCode =
    res.statusCode && res.statusCode !== 200
      ? res.statusCode
      : 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal server error",
  });
};