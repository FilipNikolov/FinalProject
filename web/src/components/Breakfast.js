import React, { useState, useEffect } from "react";
import { Nav } from "./Nav";
import "../css/breakfast.css";
import "../css/blogpost.css";
import timeIcon from "../imgs/icon_time.svg";
import plateIcon from "../imgs/icon_plate.svg";
import starIcon from "../imgs/icon_star.svg";
import arrowIcon from "../imgs/icon_arrows_white.svg";


export function Breakfast() {
    const acc = localStorage.getItem("jwt");


    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        try {
            let res = await fetch('http://localhost:10002/api/v1/recipes/allrecipes', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            });
            let data = await res.json();
            setRecipes(data);
        } catch (err) {
            console.log(err);
        }
    };
    const breakfast = recipes.filter(recipes => recipes.type === "Breakfast")
    useEffect(() => { getRecipes() }, []);
    return (
        <>
            <Nav />
            <div id="breakfast">
                <div class="home-area">
                    <div class="home-line">
                        <h1 class="blogposttitle">Breakfast</h1>
                        <div class="homeline"></div>
                    </div>
                    <div id="breakfast-container">
                        {breakfast.map(r => {
                            return (
                                <div class="cart" key={r._id}>
                                    <div class="img-container">
                                        <div class="type-position">
                                            <p class="type">{r.type}</p>
                                        </div>
                                        <img />
                                    </div>
                                    <div class="textbox">
                                        <h1 class="recipetitle">{r.title}</h1>
                                        <span class="recipedescription">{r.description.slice(0, 150)}</span>
                                        <div class="recipeinfos">
                                            <div class="recipe-info">
                                                <div class="time-container">
                                                    <img src={timeIcon} alt="" class="icons" />
                                                    <span class="aboutrecipe">{r.timetoprepare}</span>
                                                </div>
                                                <div class="portion-container">
                                                    <img src={plateIcon} alt="" class="icons" />
                                                    <span class="aboutrecipe">{r.numberofportion} persons</span>
                                                </div>
                                                <div class="grade-container">
                                                    <img src={starIcon} alt="" class="icons" />
                                                    <span class="aboutrecipe">{r.grade}</span>
                                                </div>
                                            </div>
                                            <div class="arrow"><img src={arrowIcon} alt="" /></div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}