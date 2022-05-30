import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from "./App";
import { Home } from "./components/Home";
import { Brekfast } from "./components/Brekfast";
import { Brunch } from "./components/Brunch";
import { Lunch } from "./components/Lunch";
import { Dinner } from "./components/Dinner";
import { Login } from "./components/Login";
import { CreateAcc } from "./components/CreateAcc";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/brekfast" element={<Brekfast />} />
        <Route path="/brunch" element={<Brunch />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/creatacc" element={<CreateAcc />} />
      </Route>
    </Routes>
  </Router>
)