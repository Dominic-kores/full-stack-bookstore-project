// Create pagination controls for navigating catalogue pages.
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Hide pagination when there is only one page.
  if (totalPages <= 1) {
    return null;
  }

  return (
    // Display previous and next pagination controls.
    <div className="mt-10 flex items-center justify-center gap-4">
      
      {/* Move to the previous results page. */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border bg-white px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>

      {/* Display the user's current page position. */}
      <span className="text-sm text-slate-600">
        Page {currentPage} of {totalPages}
      </span>

      {/* Move to the next results page. */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border bg-white px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
};

// Export the pagination component.
export default Pagination;