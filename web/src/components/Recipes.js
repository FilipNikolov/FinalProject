import React, { useState } from "react";
import { ProfileNav } from "./ProfileNav";
import "../css/recipes.css";
import Plus from "../imgs/icon_plus_white.svg";
import { Link } from "react-router-dom";
import Moment from "moment";
import TrashCan from "../imgs/icon_trashcan.svg";

export const Recipes = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            let res = await fetch('http://localhost:10002/api/v1/recipes', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('jwt')}`
                }
            });
            let data = await res.json();
            setPosts(data);
        } catch (err) {
            console.log(err);
        }
    };
    const editPosts = async (_id) => {
        try {
            let res = await fetch('http://localhost:10002/api/v1/recipes/:id', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('jwt')}`
                }
            });
            let data = await res.json();
            setPosts(data);
        } catch (err) {
            console.log(err);
        }
    }
    const deleteRecipes = async (id) => {
        try {
            const newPosts = await fetch('http://localhost:10002/api/v1/recipes')
                .then((newPosts) => newPosts.filter((item) => item.id !== id))

        } catch (err) {
            console.log(err)
        }
    }
    getPosts();

    return (
        <>   <ProfileNav />
            <div id="recipespage">
                <div id="recipes-area">
                    <div id="recipes-line">
                        <h1 id="title"> My Recipes</h1>
                        <div id="recipesline"></div>
                        <Link to="/recipes/create"><img id="plus-icon" src={Plus} /></Link>
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
                        {posts.map(p => {
                            return (
                                <div id="recipes-box">
                                    <ul type="none" key={p._id} id="recipe">
                                        <li id="recipe-title" key={p._id}>{p.title}</li>
                                        <li id="recipe-category" key={p._id} >{p.type}</li>
                                        <li id="recipe-date" key={p._id}>{Moment(new Date(p.createdon)).format("DD.MM.yyyy")}</li>
                                    </ul>
                                    <ul id="delete-container">
                                        <li id="recipe-delete" onClick={deleteRecipes}><img src={TrashCan} /></li>
                                    </ul>
                                </div>



                            )
                        })}

                    </div>

                </div>
            </div>

        </>
    )
}