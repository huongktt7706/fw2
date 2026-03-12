import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="" element=""/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
