import React from "react";
import { ProfileNav } from "./ProfileNav";
import "../css/recipes.css";

export function Recipes() {
    return (
        <>   <ProfileNav />
            <div id="recipesepage">
                <div id="recipes-area">
                    <div id="profile-line">
                        <h1 id="title"> My Recipes</h1>
                        <div id="profileline"></div>
                    </div>
                </div>
            </div>

        </>
    )
}