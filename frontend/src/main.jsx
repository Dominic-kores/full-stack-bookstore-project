// src/main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

// BrowserRouter enables client-side routing.
// It allows URLs such as /books/4 without reloading the whole website.
createRoot(
  document.getElementById("root")
).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);