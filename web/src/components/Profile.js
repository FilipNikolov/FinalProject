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


                    <div id="profilesmain">

                        <form className="profile-form">
                            <div id="chooseavatar">
                                <img src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png" alt="/" width="200px" />
                                <button type="button" id="avatar-btn">CHANGE AVATAR</button>
                            </div>
                            <div id="changing-area">
                                <div id="profileleftside">
                                    <span class="inputtext">First Name</span>
                                    <input type="text" name="firstname" placeholder="First Name"></input>

                                    <span class="inputtext">Email</span>
                                    <input type="email" name="email" placeholder="Email"></input>


                                    <span class="inputtext">Password</span>
                                    <input type="password" name="password" placeholder="Password"></input>
                                    <button type="submit" id="save-btn">SAVE</button>
                                </div>
                                <div id="profilerightside">
                                    <span class="inputtext">Last Name</span>
                                    <input type="text" name="lastname" placeholder="Last Name"></input>
                                    <span class="inputtext">Birthday</span>
                                    <input type="date" name="birthday" id="date" />
                                    <span class="inputtext">Repeat Password</span>
                                    <input type="password" placeholder="Repeat Password"></input>

                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}