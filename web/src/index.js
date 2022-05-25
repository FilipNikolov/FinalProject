import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
      </Route>
    </Routes>
  </Router>
)