import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "./Nav";
import "../css/recipes.css";
import Plus from "../imgs/icon_plus_white.svg";
import { Link } from "react-router-dom";
import Moment from "moment";
import TrashCan from "../imgs/icon_trashcan.svg";
import Back from "../imgs/icon_back_white.svg";


export const Recipes = () => {
    const navigator = useNavigate();



    const [recipes, setRecipes] = useState([]);
    const [clickonRecipe, setClickonRecipe] = useState(false);
    const [isImgClicked, setIsImgClicked] = useState(false);
    const [recipe, setSelectRecipe] = useState("");
    const [_id, setId] = useState("");
    const [photopath, setPhotopath] = useState("");
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [timetoprepare, setPrepare] = useState("");
    const [numberofportion, setPortion] = useState("");
    const [description, setDescription] = useState("");

    const [photo, setPhoto] = useState("");
    const [docs, setDocs] = useState();


    const imgUpload = new FormData();
    imgUpload.append("document", docs);

    const imgUpl = (e) => {
        setPhoto(URL.createObjectURL(e.target.files[0]));
        setDocs(e.target.files[0]);
        console.log(setDocs)
    };
    const getPosts = async (id) => {
        try {
            let res = await fetch('http://localhost:10002/api/v1/recipes', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('jwt')}`
                }
            });
            let data = await res.json();
            setRecipes(data);
            setId(data[0]._id)
            setPhotopath(data.photopath)
            setTitle(data[0].title)
            setType(data.type)
            setPrepare(data.timetoprepare)
            setPortion(data.numberofportion)
            setDescription(data.description)
            setSelectRecipe(data.recipe)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getPosts()
    }, [])
    const deletePost = async (id) => {
        let res = await fetch('http://localhost:10002/api/v1/recipes/' + id, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'authorization': `bearer ${localStorage.getItem("jwt")}`
            }
        })
        res = await res.json()
        getPosts()
    };
    const updateRecipe = async (id) => {

        if (isImgClicked === true) {
            let resp = await fetch(`http://localhost:10003/api/v1/storage`, {
                method: 'POST',
                body: imgUpload,
                headers: {
                    'authorization': `bearer ${localStorage.getItem("jwt")}`
                }

            })
            let json = await resp.json()
            photopath = json.file_name
        }
        let onerecipe = { title, type, timetoprepare, numberofportion, description, recipe, photopath };
        let res = await fetch(`http://localhost:10002/api/v1/recipes` + id, {
            method: 'PATCH',
            body: JSON.stringify(onerecipe),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem("jwt")}`,
                'Access-Control-Allow-Credentials': true


            }

        })

        if (res.ok) {
            let data = await res.json()
            console.log(data);
        }



    };
    const EditRecipe = (r) => {
        setClickonRecipe(true);
        setId(r._id);
        setTitle(r.title);
        setType(r.type);
        setPrepare(r.timetoprepare);
        setPortion(r.numberofportion);
        setDescription(r.description);
        setSelectRecipe(r.recipe);
        setPhotopath(r.photopath);
    };


    return (
        <>   <Nav />
            {clickonRecipe ?
                <div id="createepage">
                    <div id="edit-area">
                        <div id="create-line">
                            <h1 id="title">Edit Recipe</h1>
                            <div id="createline"></div>
                            <img id="back-icon" src={Back} alt="" onClick={() => { setClickonRecipe(false) }} />
                        </div>
                        <form onSubmit={updateRecipe(_id)} id="recipe-form">
                            <div id="create-container">
                                <div id="image-container">
                                    <span>Recipe Image</span>
                                    {isImgClicked === true ? <img src={photo} border="0" width="300px" height="150px" />
                                        : <img src={"http://localhost:10003/" + photopath} border="0" width="300px" height="150px" />}
                                    <label for="uploadbtn" id="btn-container">Upload Image</label>
                                    <input type="file" id="uploadbtn" onClick={() => { setIsImgClicked(true) }} onChange={imgUpl} />
                                </div>
                                <div id="recipe-info">
                                    <div id="recipetitle">
                                        <span>Recipe Title</span>
                                        <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                                    </div>
                                    <div id="row-container">
                                        <div className="containers">
                                            <span>Category</span>
                                            <select name="type" id="kitchen" form="kitchenform" value={type} onChange={(e) => { setType(e.target.value) }}>
                                                <option value="" disabled selected>Select Category</option>
                                                <option name="type" value="Breakfast">Breakfast</option>
                                                <option name="type" value="Brunch" >Brunch</option>
                                                <option name="type" value="Lunch" >Lunch</option>
                                                <option name="type" value="Dinner" >Dinner</option>
                                            </select>
                                        </div>
                                        <div className="containers" >
                                            <span>Preparation Time</span>
                                            <input type="text" name="timetoprepare" value={timetoprepare} onChange={(e) => { setPrepare(e.target.value) }} />
                                        </div>
                                        <div className="containers">
                                            <span>No. People</span>
                                            <input type="text" name="numberofportion" value={numberofportion} onChange={(e) => { setPortion(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div id="recipedescription">
                                        <span>Short Description</span>
                                        <textarea name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} ></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" id="btnsave">Save</button>
                                    </div>

                                </div>
                                <div id="recipe-container">
                                    <span>Recipe</span>
                                    <textarea name="recipe" value={recipe} onChange={(e) => { setSelectRecipe(e.target.value) }}  ></textarea>
                                </div>
                            </div>
                        </form>
                    </div >
                </div>
                :
                <div id="recipespage">
                    <div id="recipes-area">
                        <div id="recipes-line">
                            <h1 id="title"> My Recipes</h1>
                            <div id="recipesline"></div>
                            <Link to="/recipes/create"><img id="plus-icon" src={Plus} alt="" /></Link>
                        </div>
                        <div id="titles-container">
                            <div id="container-left">
                                <ul className="recipetitles" type="none">
                                    <li id="recipename">Recipe Name</li>
                                    <li id="recipecategory">Category</li>
                                    <li id="createdon">Created On</li>
                                </ul>
                            </div>
                            <div id="container-right">
                                <ul className="recipetitles" type="none">
                                    <li id="delete">Delete</li>
                                </ul>
                            </div>
                        </div>
                        <div id="recipe-container">
                            {recipes.map(recipe => {
                                return (
                                    <div id="recipes-box" key={recipe._id} onClick={() => { EditRecipe(recipe) }}>
                                        <ul type="none" id="recipe">
                                            <li id="recipe-title" >{recipe.title}</li>
                                            <li id="recipe-category" >{recipe.type}</li>
                                            <li id="recipe-date" >{Moment(new Date(recipe.createdon)).format("DD.MM.yyyy")}</li>
                                        </ul>
                                        <ul id="delete-container">
                                            <button type="submit" id="recipe-delete" onClick={() => { deletePost(recipe._id); window.location.reload() }} ><img src={TrashCan} alt="" /></button>
                                        </ul>
                                    </div>



                                )
                            })}

                        </div>

                    </div>
                </div>

            }
        </>
    )
}