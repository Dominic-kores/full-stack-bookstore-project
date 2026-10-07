// Import Link for client-side navigation.
import { Link } from "react-router-dom";

// Create the application header component.
const Header = () => {
  return (
    // Display the navigation header across the application.
    <header className="bg-slate-900 text-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        
        {/* Link the bookstore title back to the homepage. */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight sm:text-2xl"
        >
          Nairobi Bookstore
        </Link>

        {/* Display the bookstore tagline on larger screens. */}
        <p className="hidden text-sm text-slate-300 sm:block">
          African books & beyond
        </p>
      </div>
    </header>
  );
};

// Export the component for use in App.jsx.
export default Header;