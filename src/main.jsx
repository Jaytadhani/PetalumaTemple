import React from "react";
import ReactDOM from "react-dom/client"; // Import the new API
import App from "./App";
import './index.css';

// Get the root element
const rootElement = document.getElementById("root");

// Create a root
const root = ReactDOM.createRoot(rootElement);

// Render the app
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
