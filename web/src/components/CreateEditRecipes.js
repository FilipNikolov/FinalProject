import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileNav } from "./ProfileNav";
import "../css/createrecipes.css";
import Back from "../imgs/icon_back_white.svg";
import { Link } from "react-router-dom";


export const CreateEditRecipes = () => {
    const RecipeDataInit = {
        // photo: String,
        title: String,
        type: String,
        description: String,
        timetoprepare: String,
        numberofportion: Number,
        recipe: String,
    };
    const navigator = useNavigate();
    const [RecipeData, setRecipeData] = useState(RecipeDataInit);
    const [photo, setPhoto] = useState();
    const [docs, setDocs] = useState();



    const UploadPhoto = new FormData();
    UploadPhoto.append("document", docs);


    const handleUpload = (e) => {
        setPhoto(URL.createObjectURL(e.target.files[0]));
        setDocs(e.target.files[0]);
        console.log(setDocs)
    };



    const submit = async (e) => {
        e.preventDefault();
        try {
            let resp = await fetch('http://localhost:10003/api/v1/storage', {
                method: 'POST',
                body: UploadPhoto,
                headers: {
                    'authorization': `bearer ${localStorage.getItem("jwt")}`
                }

            });

            let res = await fetch('http://localhost:10002/api/v1/recipes', {
                method: 'POST',
                body: JSON.stringify(RecipeData),
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem("jwt")}`
                }

            });

            if (res.ok && resp.ok) {
                res = await res.json();
                localStorage.setItem("recipes", res)

            }
            navigator('/recipes');

        } catch (err) {
            alert(err)
        }

    };
    const inputChange = (e) => {
        setRecipeData({
            ...RecipeData,
            [e.target.name]: e.target.value
        });
    };


    const rec = localStorage.getItem("recipes");
    const recepti = JSON.parse(rec)

    return (
        <>   <ProfileNav />
            <div id="createepage">
                <div id="create-area">
                    <div id="create-line">
                        <h1 id="title"> My Recipes</h1>
                        <div id="createline"></div>
                        <Link to="/recipes"> <img id="back-icon" src={Back} alt="" /></Link>
                    </div>
                    <form onSubmit={submit} id="recipe-form">
                        <div id="create-container">
                            <div id="image-container">
                                <span>Recipe Image</span>
                                <img id="recipeuploadphoto" src={photo} border="0" width="300px" height="150px" />
                                <label for="uploadbtn" id="btn-container">Upload Image</label>
                                <input type="file" id="uploadbtn" onChange={handleUpload} />
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
};