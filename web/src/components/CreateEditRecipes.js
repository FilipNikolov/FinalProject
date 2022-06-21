import React from "react";
import { ProfileNav } from "./ProfileNav";
import "../css/createrecipes.css";
import Back from "../imgs/icon_back_white.svg";
import { Link } from "react-router-dom";

export function CreateEditRecipes() {
    return (
        <>   <ProfileNav />
            <div id="createepage">
                <div id="create-area">
                    <div id="create-line">
                        <h1 id="title"> My Recipes</h1>
                        <div id="createline"></div>
                        <Link to="/recipes"> <img id="back-icon" src={Back} /></Link>
                    </div>
                    <form id="recipe-form">
                        <div id="create-container">
                            <div id="image-container">
                                <span>Recipe Image</span>
                                <div id="img-container"><img src="https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg" alt="/" /></div>
                                <button type="button" id="uploadbtn">upload image</button>
                            </div>
                            <div id="recipe-info">
                                <div id="recipetitle">
                                    <span>Recipe Title</span>
                                    <input type="text" />
                                </div>
                                <div id="row-container">
                                    <div className="containers">
                                        <span>Category</span>
                                        <select name="kitchen" id="kitchen" form="kitchenform">
                                            <option value="brekfast">Brekfast</option>
                                            <option value="brunch">Brunch</option>
                                            <option value="lunch">Lunch</option>
                                            <option value="dinner">Dinner</option>
                                        </select>
                                    </div>
                                    <div className="containers">
                                        <span>Preparation Time</span>
                                        <input type="text" />
                                    </div>
                                    <div className="containers">
                                        <span>No. People</span>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div id="recipedescription">
                                    <span>Short Description</span>
                                    <textarea ></textarea>
                                </div>
                                <div>
                                    <button id="btnsave">Save</button>
                                </div>

                            </div>
                            <div id="recipe-container">
                                <span>Recipe</span>
                                <textarea ></textarea>
                            </div>
                        </div>
                    </form>
                </div >
            </div >

        </>
    )
}