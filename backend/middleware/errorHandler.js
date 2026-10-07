// Handle requests made to API routes that do not exist.
export const notFound = (req, res, next) => {
  const error = new Error(
    `Route not found: ${req.method} ${req.originalUrl}`
  );

  // Set the HTTP response status to 404.
  res.status(404);

  // Pass the error to the centralized error handler.
  next(error);
};

// Handle errors generated anywhere in the Express application.
export const errorHandler = (err, req, res, next) => {
  // Use the existing status code or default to 500.
  const statusCode =
    res.statusCode && res.statusCode !== 200
      ? res.statusCode
      : 500;

  // Return the error as JSON.
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal server error",
  });
};