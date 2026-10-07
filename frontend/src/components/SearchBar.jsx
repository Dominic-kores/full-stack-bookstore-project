// Create the search bar component using values received as props.
const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    // Run the search function when the form is submitted.
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-2 sm:flex-row"
    >
      {/* Store the user's search input in React state. */}
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by title or author..."
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />

      {/* Submit the current search term. */}
      <button
        type="submit"
        className="rounded-lg bg-blue-700 px-6 py-3 font-medium text-white transition hover:bg-blue-800"
      >
        Search
      </button>
    </form>
  );
};

// Export the search component.
export default SearchBar;