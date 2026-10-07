// Log information about every incoming backend request.
const logger = (req, res, next) => {
  // Create an ISO timestamp for the request.
  const timestamp = new Date().toISOString();

  // Display request information in the server terminal.
  console.log(
    `[${timestamp}] ${req.method} ${req.originalUrl}`
  );

  // Continue to the next middleware or route.
  next();
};

// Export the logging middleware.
export default logger;