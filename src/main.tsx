import React from "react";
import ReactDOM from "react-dom/client";
import App from "./main/App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="Vision-Dashboard">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
