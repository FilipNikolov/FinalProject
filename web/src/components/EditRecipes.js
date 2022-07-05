import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileNav } from "./ProfileNav";
import "../css/createrecipes.css";
import Back from "../imgs/icon_back_white.svg";
import { Link } from "react-router-dom";

export const EditRecipes = () => {

    const recipes = localStorage.getItem()
    const rec = JSON.parse(recipes)
    console.log(rec)

    return (
        <div><h1>tralalal</h1></div>
    )
}