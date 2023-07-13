import "tailwindcss/tailwind.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { DashboardLayout } from "./dashboard/Layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <DashboardLayout>
        <App />
      </DashboardLayout>
    </Router>
    ,
  </React.StrictMode>
);
