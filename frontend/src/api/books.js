// src/api/books.js

/*
|--------------------------------------------------------------------------
| API base URL
|--------------------------------------------------------------------------
| Locally:
| /api -> forwarded by Vite to http://localhost:5001
|
| Production:
| VITE_API_BASE_URL will point directly to Railway.
*/
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "/api";

/*
|--------------------------------------------------------------------------
| GET books
|--------------------------------------------------------------------------
| The filters object is converted into URL query parameters.
|
| Example:
| {
|   search: "ngugi",
|   category: "Fiction",
|   page: 1,
|   limit: 8
| }
|
| becomes:
| /api/books?search=ngugi&category=Fiction&page=1&limit=8
*/
export const fetchBooks = async (filters = {}) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (
      value !== "" &&
      value !== null &&
      value !== undefined
    ) {
      params.append(key, value);
    }
  });

  const queryString = params.toString();

  const url = `${API_BASE_URL}/books${
    queryString ? `?${queryString}` : ""
  }`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to load books.");
  }

  return response.json();
};

/*
|--------------------------------------------------------------------------
| GET one book
|--------------------------------------------------------------------------
*/
export const fetchBookById = async (id) => {
  const response = await fetch(
    `${API_BASE_URL}/books/${id}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Book not found.");
    }

    throw new Error("Unable to load book.");
  }

  return response.json();
};

/*
|--------------------------------------------------------------------------
| GET categories
|--------------------------------------------------------------------------
*/
export const fetchCategories = async () => {
  const response = await fetch(
    `${API_BASE_URL}/categories`
  );

  if (!response.ok) {
    throw new Error("Unable to load categories.");
  }

  return response.json();
};

/*
|--------------------------------------------------------------------------
| POST a new book
|--------------------------------------------------------------------------
| This API function will be useful later for your optional admin panel.
*/
export const createBook = async (bookData) => {
  const response = await fetch(
    `${API_BASE_URL}/books`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(bookData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
        data.errors?.join(", ") ||
        "Unable to create book."
    );
  }

  return data;
};

/*
|--------------------------------------------------------------------------
| PUT/update a book
|--------------------------------------------------------------------------
*/
export const updateBook = async (id, bookData) => {
  const response = await fetch(
    `${API_BASE_URL}/books/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(bookData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
        data.errors?.join(", ") ||
        "Unable to update book."
    );
  }

  return data;
};

/*
|--------------------------------------------------------------------------
| DELETE a book
|--------------------------------------------------------------------------
*/
export const deleteBook = async (id) => {
  const response = await fetch(
    `${API_BASE_URL}/books/${id}`,
    {
      method: "DELETE",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Unable to delete book."
    );
  }

  return data;
};