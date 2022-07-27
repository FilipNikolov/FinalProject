import { useEffect, useState } from "react";
import "../css/blogpost.css";
import "../css/popup.css";
import timeIcon from "../imgs/icon_time.svg";
import plateIcon from "../imgs/icon_plate.svg";
import starIcon from "../imgs/icon_star.svg";
import arrowIcon from "../imgs/icon_arrows_white.svg";
import { Nav } from "./Nav";


export const Blogposts = () => {

    const [recipes, setRecipes] = useState([]);
    const newestRecipes = recipes.slice(-3);
    const popularrecipes = recipes.slice(2, 8);
    const [popup, setPopup] = useState("");

    const getRecipes = async () => {
        try {
            let res = await fetch('http://localhost:10002/api/v1/recipes/allrecipes', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            });
            let data = await res.json();
            data.forEach(item => {
                item.photopath = "http://localhost:10003/" + item.photopath;
            });
            setRecipes(data);

        } catch (err) {
            console.log(err);
        }
    };
    function openPopup(recipe) {
        document.getElementById("myForm").style.display = "block";
        setPopup(recipe)
    };
    function closePopup() {
        document.getElementById("myForm").style.display = "none";
    };

    useEffect(() => { getRecipes() }, []);
    return (
        <div id="maindhomediv">
            <Nav />
            <div id="blogpostpage">
                <div class="home-area">

                    <div class="home-line">
                        <h1 class="blogposttitle">Fresh & New</h1>
                        <div class="homeline"></div>
                    </div>
                    <div id="newrecipes-container">
                        {newestRecipes.map(recipe => {
                            return (
                                <div class="cart" key={recipe._id}>
                                    <div class="img-container">
                                        <div class="type-position">
                                            <p class="type">{recipe.type}</p>
                                            <img id="imgoffood" src={recipe.photopath}></img>
                                        </div>
                                    </div>
                                    <div class="textbox">
                                        <h1 class="recipetitle">{recipe.title}</h1>
                                        <span class="recipedescription">{recipe.description.slice(0, 150)}</span>
                                        <div class="recipeinfos">
                                            <div class="recipe-info">
                                                <div class="time-container">
                                                    <img src={timeIcon} alt="" class="icons" />
                                                    <span class="aboutrecipe">{recipe.timetoprepare}</span>
                                                </div>
                                                <div class="portion-container">
                                                    <img src={plateIcon} alt="" class="icons" />
                                                    {recipe.numberofportion <= 1 ?
                                                        <span class="aboutrecipe">{recipe.numberofportion} person</span>
                                                        :
                                                        <span class="aboutrecipe">{recipe.numberofportion} persons</span>
                                                    }
                                                </div>
                                                <div class="grade-container">
                                                    <img src={starIcon} alt="" class="icons" />
                                                    <span class="aboutrecipe">{recipe.grade}</span>
                                                </div>
                                            </div>
                                            <div class="arrow" onClick={() => { openPopup(recipe) }}><img src={arrowIcon} alt="" /></div>
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
                        {popularrecipes.map(recipe => {
                            return (
                                <div class="cart" key={recipe._id} >
                                    <div class="img-container">
                                        <div class="type-position">
                                            <p class="type">{recipe.type}</p>
                                            <img id="imgoffood" src={recipe.photopath}></img>
                                        </div>
                                    </div>
                                    <div class="textbox">
                                        <h1 class="recipetitle">{recipe.title}</h1>
                                        <span class="recipedescription">{recipe.description.slice(0, 150)}</span>
                                        <div class="recipeinfos">
                                            <div class="recipe-info">
                                                <div class="time-container">
                                                    <img src={timeIcon} alt="" class="icons" />
                                                    <span class="aboutrecipe">{recipe.timetoprepare}</span>
                                                </div>
                                                <div class="portion-container">
                                                    <img src={plateIcon} alt="" class="icons" />
                                                    {recipe.numberofportion <= 1 ?
                                                        <span class="aboutrecipe">{recipe.numberofportion} person</span>
                                                        :
                                                        <span class="aboutrecipe">{recipe.numberofportion} persons</span>
                                                    }
                                                </div>
                                                <div class="grade-container">
                                                    <img src={starIcon} alt="" class="icons" />
                                                    <span class="aboutrecipe">{recipe.grade}</span>
                                                </div>
                                            </div>
                                            <div class="arrow" onClick={() => { openPopup(recipe) }}><img src={arrowIcon} alt="" /></div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
                < div key={popup._id} class="form-popup" id="myForm" >
                    <div id="popup-container">
                        <h1 id="popup-title">{popup.title}</h1>
                        <div id="main-content">
                            <div id="leftside">
                                <div id="popup-img-container">
                                    <img class="popupimg" src={popup.photopath} alt="" />
                                </div>
                                <div id="typeofrecipe">
                                    <div id="bestserved">Best Served For</div>
                                    <div id="recipetype">{popup.type}</div>
                                </div>
                                <div id="descriptionforrecipe">
                                    <p>{popup.description}</p>
                                </div>
                                <div class="recipe-info">
                                    <div class="time-container">
                                        <img src={timeIcon} alt="" class="icons" />
                                        <span class="aboutrecipe">{popup.timetoprepare}</span>
                                    </div>
                                    <div class="portion-container">
                                        <img src={plateIcon} alt="" class="icons" />
                                        {popup.numberofportion <= 1 ?
                                            <span class="aboutrecipe">{popup.numberofportion} person</span>
                                            :
                                            <span class="aboutrecipe">{popup.numberofportion} persons</span>
                                        }
                                    </div>
                                    <div class="grade-container">
                                        <img src={starIcon} alt="" class="icons" />
                                        <span class="aboutrecipe">{popup.grade}</span>
                                    </div>
                                </div>
                            </div>
                            <div id="rightside">
                                <span id="detailstitle">Recipe Details</span>
                                <p>{popup.recipe}</p>
                            </div>
                            <button type="button" class="cancelbtn" onClick={closePopup}>X</button>

                        </div>
                    </div>



                </div>
            </div>
        </div >
    )
};
