import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/fonts/stylesheet.css";
import "./index.css";
import App from "./App";
import 'react-tabs/style/react-tabs.css';
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
