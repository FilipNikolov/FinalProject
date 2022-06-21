import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from "./App";
import { Home } from "./components/Home";
import { Breakfast } from "./components/Breakfast";
import { Brunch } from "./components/Brunch";
import { Lunch } from "./components/Lunch";
import { Dinner } from "./components/Dinner";
import { Login } from "./components/Login";
import { CreateAcc } from "./components/CreateAcc";
import { Profile } from "./components/Profile";
import { Recipes } from "./components/Recipes";
import { CreateEditRecipes } from "./components/CreateEditRecipes";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/brunch" element={<Brunch />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAcc />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/createrecipes" element={<CreateEditRecipes />} />
      </Route>
    </Routes>
  </Router>
)