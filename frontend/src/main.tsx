import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./index.css";
import { CookieProvider } from "./context/CookieContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </CookieProvider>
  </React.StrictMode>
);
