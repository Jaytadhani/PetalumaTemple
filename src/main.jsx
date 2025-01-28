import React from "react";
import ReactDOM from "react-dom/client"; // Import the new API
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import './index.css';

// Get the root element
const rootElement = document.getElementById("root");

// Create a root
const root = ReactDOM.createRoot(rootElement);

// Render the app
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
