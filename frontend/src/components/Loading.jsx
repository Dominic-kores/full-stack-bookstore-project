// Create a loading indicator for API requests.
const Loading = () => {
  return (
    // Display the loader while data is being fetched.
    <div className="py-16 text-center">
      
      {/* Display an animated loading spinner. */}
      <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-blue-700" />

      {/* Inform the user that books are loading. */}
      <p className="mt-4 text-slate-600">
        Loading books...
      </p>
    </div>
  );
};

// Export the loading component.
export default Loading;