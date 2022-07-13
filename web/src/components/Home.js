import React from "react";
import { Blogposts } from "./BlogPosts";
import { Nav } from "./Nav";
import "../css/home.css";


export function Home() {
    return (
        <div id="home">
            <Nav />
            <Blogposts />
        </div>
    )
}
