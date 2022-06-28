import React, { useState, useEffect } from "react";
import { ProfileNav } from "./ProfileNav";
import "../css/recipes.css";
import Plus from "../imgs/icon_plus_white.svg";
import { Link } from "react-router-dom";
import Moment from "moment";
import TrashCan from "../imgs/icon_trashcan.svg";

export const Recipes = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
    }, [])

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
    }
    const editPost = async (id) => {
        let res = await fetch('http://localhost:10002/api/v1/recipes/' + id, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                authorization: `bearer ${localStorage.getItem("jwt")}`
            }
        })
        res = await res.json()

    };
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
                                <div id="recipes-box" key={p._id}>
                                    <ul type="none" id="recipe">
                                        <li id="recipe-title" >{p.title}</li>
                                        <li id="recipe-category" >{p.type}</li>
                                        <li id="recipe-date" >{Moment(new Date(p.createdon)).format("DD.MM.yyyy")}</li>
                                    </ul>
                                    <ul id="delete-container">
                                        <button type="submit" id="recipe-delete" onClick={() => { deletePost(p._id); window.location.reload() }} ><img src={TrashCan} /></button>
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