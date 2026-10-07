// Create a reusable component for displaying API errors.
const ErrorMessage = ({ message }) => {
  return (
    // Display the error message inside a styled alert.
    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
      <strong>Error:</strong> {message}
    </div>
  );
};

// Export the error component.
export default ErrorMessage;