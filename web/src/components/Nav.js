import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
import BabysLogo from "../imgs/logo_color.svg";

export const Nav = () => {

    return (
        <ul type="none" id="nav">
            <li ><Link to="/"><img src={BabysLogo} /></Link></li>
            <div id="menu">
                <li ><Link to="/breakfast" class="navbutton" >Breakfast</Link></li>
                <li className="bullets">•</li>
                <li><Link to="/brunch" class="navbutton">Brunch</Link></li>
                <li className="bullets">•</li>
                <li><Link to="/lunch" class="navbutton">Lunch</Link></li>
                <li className="bullets">•</li>
                <li ><Link to="/dinner" class="navbutton">Dinner</Link></li>
            </div>
            <div id="accarea">
                <li id="login"><Link to="/login">Log In</Link></li>
                <li className="or">or</li>
                <li id="register"><Link to="/register">Create Account</Link></li>
            </div>
        </ul >
    )
}