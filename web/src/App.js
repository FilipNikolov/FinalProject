import React from "react";
import Login from "./components/Login";
import { Nav } from "./components/Nav";
import { Outlet } from "react-router-dom";


export function App() {
  return (
    <div id="app">
      <Nav />
      <Outlet />
    </div>
  )
}


