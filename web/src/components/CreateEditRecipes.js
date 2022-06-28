import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileNav } from "./ProfileNav";
import "../css/createrecipes.css";
import Back from "../imgs/icon_back_white.svg";
import { Link } from "react-router-dom";

export const CreateEditRecipes = () => {
    const RecipeDataInit = {
        // image: String,
        title: String,
        type: String,
        description: String,
        timetoprepare: String,
        numberofportion: Number,
        recipe: String,
    };
    const navigator = useNavigate();
    const [RecipeData, setRecipeData] = useState(RecipeDataInit);

    const inputChange = (e) => {
        setRecipeData({
            ...RecipeData,
            [e.target.name]: e.target.value
        });
    };

    const submit = async () => {

        try {
            let res = await fetch('http://localhost:10002/api/v1/recipes', {
                method: 'POST',
                body: JSON.stringify(RecipeData),
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem("jwt")}`
                }

            });

            if (!res.ok) {
                throw 'Cannot add recipe'
            }
            res = await res.json();
            localStorage.setItem("recipes", res)
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
                                {/* <input type="image" name="image" /> */}
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
                                            <option value="" disabled selected>Select Category</option>
                                            <option name="type" value="Breakfast">Breakfast</option>
                                            <option name="type" value="Brunch" >Brunch</option>
                                            <option name="type" value="Lunch" >Lunch</option>
                                            <option name="type" value="Dinner" >Dinner</option>
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