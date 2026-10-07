// src/App.jsx

// Import React Router components.
// Routes holds all of our application routes.
// Route defines which component should display for a specific URL.
import { Routes, Route } from "react-router-dom";

// Import the reusable header component.
import Header from "./components/Header";

// Import the main pages used in the application.
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

const App = () => {
  return (
    <>
      {/* 
        Header appears on every page of the application
        because it is placed outside the Routes component.
      */}
      <Header />

      {/* 
        Routes checks the current browser URL
        and displays the matching page component.
      */}
      <Routes>
        {/* 
          Home route.
          When the user visits "/", the bookstore catalogue is displayed.

          The Home page is responsible for:
          - Fetching books from the Express backend
          - Searching books
          - Filtering books by category
          - Sorting books
          - Handling pagination
        */}
        <Route path="/" element={<Home />} />

        {/* 
          Dynamic book details route.

          Example:
          /books/1
          /books/5
          /books/12

          ":id" is a dynamic URL parameter.
          The BookDetails component uses this ID to request
          the selected book from the backend API.
        */}
        <Route
          path="/books/:id"
          element={<BookDetails />}
        />

        {/* 
          Fallback route.

          The "*" catches any URL that does not match
          one of the routes above and displays a simple
          "Page Not Found" message.
        */}
        <Route
          path="*"
          element={
            <main className="p-10 text-center">
              <h1 className="text-3xl font-bold">
                Page Not Found
              </h1>

              <p className="mt-3 text-slate-600">
                The page you are looking for does not exist.
              </p>
            </main>
          }
        />
      </Routes>
    </>
  );
};

export default App;