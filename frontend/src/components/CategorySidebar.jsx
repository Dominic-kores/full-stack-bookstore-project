// Create the category filtering component.
const CategorySidebar = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    // Display category options inside a sidebar.
    <aside className="rounded-xl bg-white p-5 shadow-sm">
      {/* Display the category section heading. */}
      <h2 className="mb-4 text-lg font-bold text-slate-900">
        Categories
      </h2>

      {/* Arrange category buttons responsively. */}
      <div className="flex flex-wrap gap-2 lg:flex-col">
        
        {/* Clear the category filter to show every book. */}
        <button
          onClick={() => onCategoryChange("")}
          className={`rounded-lg px-4 py-2 text-left transition ${
            selectedCategory === ""
              ? "bg-blue-700 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          All Books
        </button>

        {/* Create a button for every category returned by the backend. */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-lg px-4 py-2 text-left transition ${
              selectedCategory === category
                ? "bg-blue-700 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  );
};

// Export the category component.
export default CategorySidebar;