import { useEffect, useState } from "react";
import "../css/blogpost.css";
import timeIcon from "../imgs/icon_time.svg";
import plateIcon from "../imgs/icon_plate.svg";
import starIcon from "../imgs/icon_star.svg";
import arrowIcon from "../imgs/icon_arrows_white.svg";
export const Blogposts = () => {

    const [recipes, setRecipes] = useState([]);
    const newestRecipes = recipes.slice(-3);
    const popularrecipes = recipes.slice(2, 8);
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
    useEffect(() => { getRecipes() }, []);
    return (
        <div id="blogpostpage">
            <div class="home-area">
                <div class="home-line">
                    <h1 class="blogposttitle">Fresh & New</h1>
                    <div class="homeline"></div>
                </div>
                <div id="newrecipes-container">
                    {newestRecipes.map(r => {
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
                                    <span class="recipedescription">{r.description}</span>
                                    <div class="recipeinfos">
                                        <div class="time-container">
                                            <img src={timeIcon} alt="" class="icons" />
                                            <span class="timetoprepare">{r.timetoprepare}</span>
                                        </div>
                                        <div class="portion-container">
                                            <img src={plateIcon} alt="" class="icons" />
                                            <span class="numberofportion">{r.numberofportion} persons</span>
                                        </div>
                                        <div class="grade-container">
                                            <img src={starIcon} alt="" class="icons" />
                                            <span class="gradeofrecipe">{r.grade}</span>
                                        </div>
                                        <div class="arrow"><img src={arrowIcon} alt="" /></div>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
                <div class="home-line">
                    <h1 class="blogposttitle">Most Popular Recipes</h1>
                    <div id="secondline"></div>
                </div>
                <div id="popularrecipes-container">
                    {popularrecipes.map(r => {
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
                                    <span class="recipedescription">{r.description}</span>
                                    <div className="info-container">
                                        <div class="recipeinfos">
                                            <div class="time-container">
                                                <img src={timeIcon} alt="" class="icons" />
                                                <span class="timetoprepare">{r.timetoprepare}</span>
                                            </div>
                                            <div class="portion-container">
                                                <img src={plateIcon} alt="" class="icons" />
                                                <span class="numberofportion">{r.numberofportion} persons</span>
                                            </div>
                                            <div class="grade-container">
                                                <img src={starIcon} alt="" class="icons" />
                                                <span class="gradeofrecipe">{r.grade}</span>
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
    )
};
