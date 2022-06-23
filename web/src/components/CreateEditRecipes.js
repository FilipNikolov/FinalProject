import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileNav } from "./ProfileNav";
import "../css/createrecipes.css";
import Back from "../imgs/icon_back_white.svg";
import { Link } from "react-router-dom";

export const CreateEditRecipes = () => {
    const RecipeDataInit = {
        title: String,
        type: String,
        description: String,
        timetoprepare: String,
        grade: Number,
        numberofportion: Number,
        recipe: String,
        createdon: Date


    };
    const navigator = useNavigate();
    const [RecipeData, setRecipeData] = useState(RecipeDataInit);

    const inputChange = (e) => {
        setRecipeData({
            ...RecipeData,
            [e.target.name]: e.target.value
        });
    };

    const submit = async (e) => {

        try {
            let res = await fetch('http://localhost:10002/api/v1/recipes', {
                method: 'POST',
                body: JSON.stringify(RecipeData),
                headers: {
                    'content-type': 'application/json'
                }

            });
            if (!res.ok) {
                throw 'Cannot add recipe'
            }
            res = await res.json();
            // localStorage.setItem("recipes", res)
            if (res.ok) {
                navigator('/recipes');
            }
        } catch (err) {
            alert(err)
        }
    };
    return (
        <>   <ProfileNav />
            <div id="createepage">
                <div id="create-area">
                    <div id="create-line">
                        <h1 id="title"> My Recipes</h1>
                        <div id="createline"></div>
                        <Link to="/recipes"> <img id="back-icon" src={Back} /></Link>
                    </div>
                    <form onSubmit={submit} id="recipe-form">
                        <div id="create-container">
                            <div id="image-container">
                                <span>Recipe Image</span>
                                <div id="img-container"><img src="https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg" alt="/" /></div>
                                <button type="button" id="uploadbtn">upload image</button>
                            </div>
                            <div id="recipe-info">
                                <div id="recipetitle">
                                    <span>Recipe Title</span>
                                    <input type="text" name="title" value={RecipeData.title} onChange={inputChange} />
                                </div>
                                <div id="row-container">
                                    <div className="containers">
                                        <span>Category</span>
                                        <select value={RecipeData.type} onChange={inputChange} name="type" id="kitchen" form="kitchenform">
                                            <option name="type" value={RecipeData.type} onChange={inputChange}>Brekfast</option>
                                            <option name="type" value={RecipeData.type} onChange={inputChange}>Brunch</option>
                                            <option name="type" value={RecipeData.type} onChange={inputChange}>Lunch</option>
                                            <option name="type" value={RecipeData.type} onChange={inputChange}>Dinner</option>
                                        </select>
                                    </div>
                                    <div className="containers">
                                        <span>Preparation Time</span>
                                        <input type="text" name="timetoprepare" value={RecipeData.timetoprepare} onChange={inputChange} />
                                    </div>
                                    <div className="containers">
                                        <span>No. People</span>
                                        <input type="text" name="numberofportion" value={RecipeData.numberofportion} onChange={inputChange} />
                                    </div>
                                </div>
                                <div id="recipedescription">
                                    <span>Short Description</span>
                                    <textarea name="description" value={RecipeData.description} onChange={inputChange} ></textarea>
                                </div>
                                <div>
                                    <button type="submit" id="btnsave">Save</button>
                                </div>

                            </div>
                            <div id="recipe-container">
                                <span>Recipe</span>
                                <textarea name="recipe" value={RecipeData.recipe} onChange={inputChange}></textarea>
                            </div>
                        </div>
                    </form>
                </div >
            </div >

        </>
    )
}