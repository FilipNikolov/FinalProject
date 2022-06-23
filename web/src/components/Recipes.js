import React, { useState } from "react";
import { ProfileNav } from "./ProfileNav";
import "../css/recipes.css";
import Plus from "../imgs/icon_plus_white.svg";
import { Link } from "react-router-dom";
import Moment from "moment";

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
                    <div id="recipe-container">
                        {posts.map(p => {
                            return (
                                <ul type="none" key={p._id} id="recipe">
                                    <li id="recipe-title" key={p._id}>{p.title}</li>
                                    <li id="recipe-category" key={p._id} >{p.type}</li>
                                    <li id="recipe-date" key={p._id}>{Moment(new Date(p.createdon)).format("DD.MM.yyyy")}</li>
                                </ul>

                            )
                        })}
                    </div>

                </div>
            </div>

        </>
    )
}