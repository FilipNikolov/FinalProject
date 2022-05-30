import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

export const Nav = () => {
    return (
        <ul type="none" id="nav">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/brekfast">Brekfast</Link></li>
            <li><Link to="/brunch">Brunch</Link></li>
            <li><Link to="/lunch">Lunch</Link></li>
            <li><Link to="/dinner">Dinner</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/creatacc">Create Account</Link></li>
        </ul>
    )
}