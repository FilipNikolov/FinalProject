import React from "react";
import { ProfileNav } from "./ProfileNav";
import "../css/profile.css";

export function Profile() {
    return (
        <>   <ProfileNav />
            <div id="profilepage">
                <div id="profile-area">
                    <div id="profile-line">
                        <h1 id="title"> My Profile</h1>
                        <div id="profileline"></div>
                    </div>
                </div>
            </div>

        </>
    )
}