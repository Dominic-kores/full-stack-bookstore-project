// middleware/logger.js

// This middleware runs before our route handlers.
// It records information about every incoming request.
const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();

  console.log(
    `[${timestamp}] ${req.method} ${req.originalUrl}`
  );

  // Passing control to the next middleware or route handler is essential.
  next();
};

export default logger;