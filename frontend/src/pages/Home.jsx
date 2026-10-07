// Import React hooks for managing state and API side effects.
import { useEffect, useState } from "react";

// Import API functions used to communicate with the Express backend.
import {
  fetchBooks,
  fetchCategories,
} from "../api/books";

// Import reusable UI components.
import BookCard from "../components/BookCard";
import CategorySidebar from "../components/CategorySidebar";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

// Create the main bookstore catalogue page.
const Home = () => {
  // Store the books returned by the backend.
  const [books, setBooks] = useState([]);

  // Store the available book categories.
  const [categories, setCategories] = useState([]);

  // Store the text currently entered into the search box.
  const [searchInput, setSearchInput] = useState("");

  // Store the confirmed search term sent to the backend.
  const [searchTerm, setSearchTerm] = useState("");

  // Store the currently selected category filter.
  const [selectedCategory, setSelectedCategory] = useState("");

  // Store the selected field used to sort books.
  const [sort, setSort] = useState("");

  // Store whether sorting should be ascending or descending.
  const [order, setOrder] = useState("asc");

  // Store the current catalogue page.
  const [page, setPage] = useState(1);

  // Store the total number of pages returned by the backend.
  const [totalPages, setTotalPages] = useState(1);

  // Track whether an API request is currently loading.
  const [loading, setLoading] = useState(true);

  // Store any API error message.
  const [error, setError] = useState("");

  // Fetch available categories when the page first loads.
  useEffect(() => {
    const loadCategories = async () => {
      try {
        // Request categories from the Express backend.
        const response = await fetchCategories();

        // Save returned categories in React state.
        setCategories(response.data);
      } catch (err) {
        // Log category errors for development debugging.
        console.error("Category request failed:", err);
      }
    };

    // Run the category request.
    loadCategories();
  }, []);

  // Fetch books whenever search, category, pagination or sorting changes.
  useEffect(() => {
    const loadBooks = async () => {
      try {
        // Show the loading state before starting the API request.
        setLoading(true);

        // Clear any previous error message.
        setError("");

        // Send the current filters to the Express backend.
        const response = await fetchBooks({
          search: searchTerm,
          category: selectedCategory,
          page,
          limit: 8,
          sort,
          order,
        });

        // Store the returned books in React state.
        setBooks(response.data);

        // Store the pagination metadata returned by the backend.
        setTotalPages(response.pagination.totalPages);
      } catch (err) {
        // Display an error if the backend request fails.
        setError(err.message);
      } finally {
        // Stop the loading state after the request completes.
        setLoading(false);
      }
    };

    // Run the books API request.
    loadBooks();
  }, [
    searchTerm,
    selectedCategory,
    page,
    sort,
    order,
  ]);

  // Submit the user's search term.
  const handleSearch = (event) => {
    // Prevent the browser from refreshing the page.
    event.preventDefault();

    // Return search results to the first page.
    setPage(1);

    // Send the cleaned search term to the API.
    setSearchTerm(searchInput.trim());
  };

  // Update the selected book category.
  const handleCategoryChange = (category) => {
    // Save the selected category.
    setSelectedCategory(category);

    // Return category results to the first page.
    setPage(1);
  };

  return (
    // Display the main bookstore catalogue.
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Display the catalogue heading and introduction. */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Explore Our Books
        </h1>

        <p className="mt-2 text-slate-600">
          Discover African literature, technology,
          business, academic and self-development books.
        </p>
      </section>

      {/* Display the title and author search form. */}
      <SearchBar
        value={searchInput}
        onChange={setSearchInput}
        onSubmit={handleSearch}
      />

      {/* Display sorting options for the catalogue. */}
      <div className="mt-5 flex flex-wrap gap-3">
        
        {/* Select which book field should be sorted. */}
        <select
          value={sort}
          onChange={(event) => {
            setSort(event.target.value);
            setPage(1);
          }}
          className="rounded-lg border bg-white px-4 py-2"
        >
          <option value="">Default order</option>
          <option value="price">Price</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="createdAt">Date Added</option>
        </select>

        {/* Select ascending or descending sorting order. */}
        <select
          value={order}
          onChange={(event) => {
            setOrder(event.target.value);
            setPage(1);
          }}
          className="rounded-lg border bg-white px-4 py-2"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Create the responsive category and book catalogue layout. */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
        
        {/* Display available book categories. */}
        <CategorySidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Display books and request states. */}
        <section>
          
          {/* Display the loading component during API requests. */}
          {loading && <Loading />}

          {/* Display an API error when a request fails. */}
          {!loading && error && (
            <ErrorMessage message={error} />
          )}

          {/* Display a message when no matching books are found. */}
          {!loading &&
            !error &&
            books.length === 0 && (
              <div className="rounded-xl bg-white p-8 text-center shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">
                  No books found
                </h2>

                <p className="mt-2 text-slate-600">
                  Try another search or category.
                </p>
              </div>
            )}

          {/* Display the catalogue when books are available. */}
          {!loading &&
            !error &&
            books.length > 0 && (
              <>
                {/* Create a responsive grid of book cards. */}
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {books.map((book) => (
                    <BookCard
                      key={book.id}
                      book={book}
                    />
                  ))}
                </div>

                {/* Display controls for navigating result pages. */}
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
              </>
            )}
        </section>
      </div>
    </main>
  );
};

// Export the catalogue page.
export default Home;