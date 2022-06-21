import React from "react";
import { ProfileNav } from "./ProfileNav";
import "../css/recipes.css";
import Plus from "../imgs/icon_plus_white.svg";
import { Link } from "react-router-dom";

export function Recipes() {
    return (
        <>   <ProfileNav />
            <div id="recipespage">
                <div id="recipes-area">
                    <div id="recipes-line">
                        <h1 id="title"> My Recipes</h1>
                        <div id="recipesline"></div>
                        <Link to="/createrecipes"><img id="plus-icon" src={Plus} /></Link>
                    </div>
                </div>
            </div>

        </>
    )
}