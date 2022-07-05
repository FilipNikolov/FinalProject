import React, { useState } from "react";
import { ProfileNav } from "./ProfileNav";
import "../css/profile.css";

export function Profile() {
    // const acc = localStorage.getItem("acc");
    // const accValue = JSON.parse(acc);

    const [photo, setPhoto] = useState();
    const [docs, setDocs] = useState(null);




    const UploadPhoto = new FormData();
    UploadPhoto.append("document", docs);


    const handleUpload = (e) => {
        setPhoto(URL.createObjectURL(e.target.files[0]));
        setDocs(e.target.files[0]);
        console.log(setDocs)
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:10003/api/v1/storage', {
                method: 'POST',
                body: UploadPhoto,
                headers: {
                    'authorization': `bearer ${localStorage.getItem("jwt")}`
                }

            });
            if (!res.ok) {
                return 'Cannot add avatar!'
            }
            res = await res.json();
            localStorage.setItem("avatar", res)
        } catch (err) {
            alert(err)
        }

    };


    return (
        <>   <ProfileNav />
            <div id="profilepage">
                <div id="profile-area">
                    <div id="profile-line">
                        <h1 id="title"> My Profile</h1>
                        <div id="profileline"></div>
                    </div>


                    <div id="profilesmain">

                        <form className="profile-form" onSubmit={submit}>
                            <div id="chooseavatar">
                                <img id="recipeuploadphoto" src={photo} value={Profile.photo} border="0" width="200px" height="200px" />
                                <div id="button-container">
                                    <label for="uploadbtn" id="btn-container">Upload Image</label>
                                    <input type="file" id="uploadbtn" onChange={handleUpload} />
                                </div>
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
                                    <span class="inputtext" >Last Name</span>
                                    <input type="text" name="lastname" placeholder="Last Name"></input>
                                    <span class="inputtext" >Birthday</span>
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