import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";

export function App() {
  return (
    <div id="app">
      <Nav />
      <Outlet />
    </div>
  )
}

