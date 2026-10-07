// Import React hooks for API data and page lifecycle handling.
import { useEffect, useState } from "react";

// Import routing tools for navigation and URL parameters.
import {
  Link,
  useParams,
} from "react-router-dom";

// Import the API function for requesting one book.
import { fetchBookById } from "../api/books";

// Import reusable loading and error components.
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

// Create the individual book details page.
const BookDetails = () => {
  // Get the book ID from the URL.
  const { id } = useParams();

  // Store the selected book returned by the backend.
  const [book, setBook] = useState(null);

  // Track whether the API request is loading.
  const [loading, setLoading] = useState(true);

  // Store any error returned while fetching the book.
  const [error, setError] = useState("");

  // Fetch the selected book whenever the URL ID changes.
  useEffect(() => {
    const loadBook = async () => {
      try {
        // Start the loading state.
        setLoading(true);

        // Clear previous errors.
        setError("");

        // Request the selected book from the Express API.
        const response = await fetchBookById(id);

        // Save the returned book in React state.
        setBook(response.data);
      } catch (err) {
        // Store the API error message.
        setError(err.message);
      } finally {
        // Stop the loading state after the request finishes.
        setLoading(false);
      }
    };

    // Run the API request.
    loadBook();
  }, [id]);

  // Display the loading component while waiting for the API.
  if (loading) {
    return <Loading />;
  }

  // Display the API error if the request fails.
  if (error) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10">
        <ErrorMessage message={error} />
      </main>
    );
  }

  // Prevent rendering if no book data exists.
  if (!book) {
    return null;
  }

  return (
    // Display the selected book information.
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      
      {/* Navigate back to the main catalogue. */}
      <Link
        to="/"
        className="mb-6 inline-block font-medium text-blue-700 hover:underline"
      >
        ← Back to catalogue
      </Link>

      {/* Create the responsive book detail layout. */}
      <article className="grid overflow-hidden rounded-2xl bg-white shadow-md md:grid-cols-[320px_1fr]">
        
        {/* Display the selected book's cover image. */}
        <img
          src={book.coverImage}
          alt={`${book.title} cover`}
          className="h-full min-h-96 w-full object-cover"
        />

        {/* Display the book information. */}
        <div className="p-6 sm:p-8">
          
          {/* Display the book category. */}
          <span className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            {book.category}
          </span>

          {/* Display the book title. */}
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            {book.title}
          </h1>

          {/* Display the author name. */}
          <p className="mt-2 text-lg text-slate-600">
            by {book.author}
          </p>

          {/* Display the formatted price. */}
          <p className="mt-6 text-3xl font-bold">
            KES {book.price.toLocaleString()}
          </p>

          {/* Display whether the book is currently available. */}
          <p
            className={`mt-3 font-semibold ${
              book.inStock
                ? "text-green-700"
                : "text-red-600"
            }`}
          >
            {book.inStock
              ? "Available"
              : "Currently out of stock"}
          </p>

          {/* Display the book description. */}
          <div className="mt-8 border-t pt-6">
            <h2 className="text-lg font-bold">
              Description
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {book.description}
            </p>
          </div>

          {/* Display additional book information. */}
          <div className="mt-8 border-t pt-6 text-sm text-slate-600">
            
            {/* Display the book ISBN. */}
            <p>
              <strong>ISBN:</strong> {book.isbn}
            </p>

            {/* Convert the backend date into a readable format. */}
            <p className="mt-2">
              <strong>Added:</strong>{" "}
              {new Date(
                book.createdAt
              ).toLocaleDateString()}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

// Export the book details page.
export default BookDetails;