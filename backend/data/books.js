// data/books.js

// Categories allowed by the assignment.
export const categories = [
  "Fiction",
  "Non-Fiction",
  "Technology",
  "Business",
  "Self-Help",
  "Academic",
];

// In-memory bookstore data.
// Because we are not using a database yet, this array acts as our storage.
export const books = [
  // =========================
  // FICTION
  // =========================

  {
    id: 1,
    title: "Weep Not, Child",
    author: "Ngugi wa Thiong'o",
    isbn: "978-0-14-310669-2",
    price: 1200,
    category: "Fiction",
    description:
      "A landmark East African novel exploring family, education and colonial Kenya.",
    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780143106692-L.jpg",

    inStock: true,
    createdAt: "2026-01-15T00:00:00.000Z",
  },

  {
    id: 2,
    title: "Dust",
    author: "Yvonne Adhiambo Owuor",
    isbn: "978-0-345-80254-5",
    price: 1800,
    category: "Fiction",
    description:
      "A powerful Kenyan novel about family, memory and the country's political history.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780345802545-L.jpg",

    inStock: true,
    createdAt: "2026-01-18T00:00:00.000Z",
  },

  {
    id: 3,
    title: "The River and the Source",
    author: "Margaret Ogola",
    isbn: "978-9966-882-05-9",
    price: 1400,
    category: "Fiction",
    description:
      "A multigenerational story following a Kenyan family through social change.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9789966882059-L.jpg",

    inStock: true,
    createdAt: "2026-01-20T00:00:00.000Z",
  },

  {
    id: 4,
    title: "A Grain of Wheat",
    author: "Ngugi wa Thiong'o",
    isbn: "978-0-14-310676-0",
    price: 1350,
    category: "Fiction",
    description:
      "A novel set around Kenya's struggle for independence and its aftermath.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780143106760-L.jpg",

    inStock: false,
    createdAt: "2026-01-23T00:00:00.000Z",
  },

  // =========================
  // NON-FICTION
  // =========================

  {
    id: 5,
    title: "Born a Crime",
    author: "Trevor Noah",
    isbn: "978-0-399-58819-8",
    price: 1500,
    category: "Non-Fiction",
    description:
      "A memoir describing Trevor Noah's childhood in apartheid and post-apartheid South Africa.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780399588198-L.jpg",

    inStock: true,
    createdAt: "2026-02-01T00:00:00.000Z",
  },

  {
    id: 6,
    title: "Unbowed",
    author: "Wangari Maathai",
    isbn: "978-0-307-27520-2",
    price: 1650,
    category: "Non-Fiction",
    description:
      "The autobiography of Kenyan environmentalist and Nobel laureate Wangari Maathai.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780307275202-L.jpg",

    inStock: true,
    createdAt: "2026-02-03T00:00:00.000Z",
  },

  {
    id: 7,
    title: "Dreams from My Father",
    author: "Barack Obama",
    isbn: "978-1-400-08277-3",
    price: 1750,
    category: "Non-Fiction",
    description:
      "A memoir exploring identity, family history and connections between America and Kenya.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9781400082773-L.jpg",

    inStock: false,
    createdAt: "2026-02-06T00:00:00.000Z",
  },

  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 8,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    isbn: "978-1-59327-950-9",
    price: 3000,
    category: "Technology",
    description:
      "A modern introduction to JavaScript programming and software development concepts.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9781593279509-L.jpg",

    inStock: true,
    createdAt: "2026-02-10T00:00:00.000Z",
  },

  {
    id: 9,
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "978-0-13-235088-4",
    price: 3500,
    category: "Technology",
    description:
      "Practical principles for writing readable, maintainable and professional software.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",

    inStock: true,
    createdAt: "2026-02-12T00:00:00.000Z",
  },

  {
    id: 10,
    title: "The Pragmatic Programmer",
    author: "David Thomas and Andrew Hunt",
    isbn: "978-0-13-595705-9",
    price: 3900,
    category: "Technology",
    description:
      "Software engineering practices for building reliable and maintainable applications.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg",

    inStock: true,
    createdAt: "2026-02-15T00:00:00.000Z",
  },

  {
    id: 11,

    // "You Don't Know JS Yet" is a series.
    // We use the first book: Get Started.
    title: "You Don't Know JS Yet: Get Started",

    author: "Kyle Simpson",

    isbn: "978-1-64786-201-5",

    price: 2800,
    category: "Technology",

    description:
      "A detailed exploration of JavaScript fundamentals and language behaviour.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9781647862015-L.jpg",

    inStock: true,
    createdAt: "2026-02-18T00:00:00.000Z",
  },

  // =========================
  // BUSINESS
  // =========================

  {
    id: 12,
    title: "The Lean Startup",
    author: "Eric Ries",
    isbn: "978-0-307-88789-4",
    price: 2200,
    category: "Business",
    description:
      "An introduction to building and testing businesses through rapid experimentation.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg",

    inStock: true,
    createdAt: "2026-02-21T00:00:00.000Z",
  },

  {
    id: 13,
    title: "Good to Great",
    author: "Jim Collins",
    isbn: "978-0-06-662099-2",
    price: 2400,
    category: "Business",
    description:
      "An examination of organisational characteristics associated with sustained performance.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780066620992-L.jpg",

    inStock: false,
    createdAt: "2026-02-23T00:00:00.000Z",
  },

  {
    id: 14,
    title: "Blue Ocean Strategy",
    author: "W. Chan Kim and Renée Mauborgne",
    isbn: "978-1-62527-449-6",
    price: 2600,
    category: "Business",
    description:
      "A strategic framework for creating uncontested markets and new customer demand.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9781625274496-L.jpg",

    inStock: true,
    createdAt: "2026-02-25T00:00:00.000Z",
  },

  // =========================
  // SELF-HELP
  // =========================

  {
    id: 15,
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "978-0-7352-1129-2",
    price: 2300,
    category: "Self-Help",
    description:
      "Practical strategies for building better habits through small consistent improvements.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",

    inStock: true,
    createdAt: "2026-03-01T00:00:00.000Z",
  },

  {
    id: 16,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    isbn: "978-1-9821-3727-4",
    price: 2100,
    category: "Self-Help",
    description:
      "A personal development framework centred on effectiveness and principle-based living.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg",

    inStock: true,
    createdAt: "2026-03-03T00:00:00.000Z",
  },

  {
    id: 17,
    title: "Mindset",
    author: "Carol S. Dweck",
    isbn: "978-0-345-47232-8",
    price: 2000,
    category: "Self-Help",
    description:
      "An exploration of how beliefs about ability can affect learning and achievement.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780345472328-L.jpg",

    inStock: false,
    createdAt: "2026-03-05T00:00:00.000Z",
  },

  // =========================
  // ACADEMIC
  // =========================

  {
    id: 18,
    title: "Research Methodology",
    author: "C. R. Kothari",

    // Correct ISBN for Research Methodology:
    // Methods and Techniques, 2nd Edition.
    isbn: "978-81-224-1522-3",

    price: 1900,
    category: "Academic",

    description:
      "An introduction to research methods, study design, data collection and analysis.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9788122415223-L.jpg",

    inStock: true,
    createdAt: "2026-03-08T00:00:00.000Z",
  },

  {
    id: 19,
    title: "Principles of Economics",
    author: "N. Gregory Mankiw",

    // 9th Edition.
    isbn: "978-0-357-54159-3",

    price: 4200,
    category: "Academic",

    description:
      "An introductory text covering microeconomic and macroeconomic principles.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9780357541593-L.jpg",

    inStock: true,
    createdAt: "2026-03-10T00:00:00.000Z",
  },

  {
    id: 20,
    title: "Operations Management",

    // This ISBN corresponds to the 10th Edition.
    author: "Nigel Slack, Alistair Brandon-Jones and Nicola Burgess",

    isbn: "978-1-292-40824-8",

    price: 4500,
    category: "Academic",

    description:
      "A comprehensive introduction to operations, supply chains and process management.",

    coverImage:
      "https://covers.openlibrary.org/b/isbn/9781292408248-L.jpg",

    inStock: true,
    createdAt: "2026-03-12T00:00:00.000Z",
  },
];