import React from "react";
import Login from "./components/Login";
import { Nav } from "./components/Nav";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import "./css/app.css";

export function App() {
  return (
    <div id="app">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}


