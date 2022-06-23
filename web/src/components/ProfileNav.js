import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/profilenav.css";
import BabysLogo from "../imgs/logo_color.svg";

export const ProfileNav = () => {
    return (
        <ul type="none" id="nav">
            <li ><Link to="/profile"><img src={BabysLogo} /></Link></li>
            <div id="menu">
                <li ><Link to="/breakfast">Breakfast</Link></li>
                <li className="bullets">•</li>
                <li><Link to="/brunch">Brunch</Link></li>
                <li className="bullets">•</li>
                <li><Link to="/lunch">Lunch</Link></li>
                <li className="bullets">•</li>
                <li ><Link to="/dinner">Dinner</Link></li>
            </div>
            <div id="profile-info">
                <li id="recipes"><Link to="/recipes">My Recipes</Link></li>
                <li className="profilebullets">•</li>
                <li id="profile"><Link to="/profile">My Profile</Link></li>
                <li className="profilebullets">•</li>
                <li id="logout"><Link to="/">Log out</Link></li>
            </div>
        </ul >
    )
}