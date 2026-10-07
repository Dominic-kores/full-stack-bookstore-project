// Import Link to navigate to an individual book page.
import { Link } from "react-router-dom";

// Create a reusable card for displaying one book.
const BookCard = ({ book }) => {
  return (
    // Display each book inside a responsive card.
    <article className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      
      {/* Display the book cover image. */}
      <img
        src={book.coverImage}
        alt={`${book.title} cover`}
        className="h-64 w-full object-cover"
      />

      <div className="p-5">
        {/* Display the book category. */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
          {book.category}
        </p>

        {/* Display the book title. */}
        <h2 className="line-clamp-2 text-lg font-bold text-slate-900">
          {book.title}
        </h2>

        {/* Display the author name. */}
        <p className="mt-1 text-sm text-slate-600">
          {book.author}
        </p>

        {/* Format and display the price in Kenyan shillings. */}
        <p className="mt-4 text-xl font-bold text-slate-900">
          KES {book.price.toLocaleString()}
        </p>

        {/* Display the current stock status. */}
        <p
          className={`mt-2 text-sm font-medium ${
            book.inStock ? "text-green-700" : "text-red-600"
          }`}
        >
          {book.inStock ? "In Stock" : "Out of Stock"}
        </p>

        {/* Navigate to the selected book's details page. */}
        <Link
          to={`/books/${book.id}`}
          className="mt-5 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          View Details
        </Link>
      </div>
    </article>
  );
};

// Export the reusable book card.
export default BookCard;