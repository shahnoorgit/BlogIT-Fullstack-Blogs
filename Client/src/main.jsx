import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContext from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import BlogContext from "./context/BlogContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <BlogContext>
          <App />
        </BlogContext>
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
);
