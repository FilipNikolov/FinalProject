import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

import "./css/app.css";

export function App() {
  return (
    <div id="app">
      <Outlet />
      <Footer />
    </div>

  )
}


