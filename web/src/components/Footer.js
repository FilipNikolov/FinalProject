import React from "react";
import "../css/footer.css"
import { Link } from "react-router-dom";
import BabysWhite from "../imgs/logo_white.svg";
export function Footer() {

    return (
        <div id="fot">
            <ul type="none" id="footer">
                <li ><Link to="/"><img src={BabysWhite} /></Link></li>
                <div id="fotermenu">
                    <li className="foot"><Link to="/breakfast">Breakfast</Link></li>
                    <li className="discs">•</li>
                    <li className="foot"><Link to="/brunch">Brunch</Link></li>
                    <li className="discs">•</li>
                    <li className="foot"><Link to="/lunch">Lunch</Link></li>
                    <li className="discs">•</li>
                    <li className="foot" ><Link to="/dinner">Dinner</Link></li>
                </div>
                <div id="footertext">
                    <p>Baby’s Food Place copyright © 2021</p>
                </div>
            </ul >
        </div>
    )
}