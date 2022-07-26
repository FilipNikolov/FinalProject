import React, { useState, useEffect } from "react";
import { Nav } from "./Nav";
import "../css/profile.css";
import Moment from "moment";
import defaultAvatar from "../imgs/defaultavatar.jpg";


export function Profile() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpassword, setRepeatpassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const [avatar, setAvatar] = useState("");


    const [docs, setDocs] = useState();
    const [photo, setPhoto] = useState();

    const imgUpload = new FormData();
    imgUpload.append("document", docs);

    const imgUpl = (e) => {
        setPhoto(URL.createObjectURL(e.target.files[0]));
        setDocs(e.target.files[0]);
        console.log(setDocs)
    };

    const getUser = async () => {
        try {
            let res = await fetch('http://localhost:10001/api/v1/auth/get/myprofile', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('jwt')}`
                }
            });
            let data = await res.json();
            setAvatar(data.avatar);
            setFirstname(data.firstname);
            setLastname(data.lastname);
            setEmail(data.email);
            setBirthday(data.birthday);

        } catch (err) {
            console.log(err);
        }
    };


    const UpdateProfile = async (e) => {
        e.preventDefault();
        try {
            if (password !== repeatpassword) {
                throw new Error("Passwords doesn't match!")
            };
            // let avatarRes = await fetch('http://localhost:10003/api/v1/storage', {
            //     method: 'POST',
            //     body: imgUpload,
            //     headers: {
            //         'authorization': `bearer ${localStorage.getItem("jwt")}`
            //     }

            // })
            // let json = await avatarRes.json()
            // setAvatar(json.file_name)
            let acc = { firstname, lastname, email, password, birthday, avatar }
            let res = await fetch(`http://localhost:10001/api/v1/auth/update/myprofile`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem("jwt")}`
                },

                body: JSON.stringify(acc)
            })
            // if (avatarRes.ok && res.ok) {
            //     res = await res.json();
            // }
            navigator('/recipes');
        } catch (err) {
            alert(err)
        }

    };
    useEffect(() => {
        getUser()
    }, [])
    return (
        <>   <Nav />
            <div id="profilepage">
                <div id="profile-area">
                    <div id="profile-line">
                        <h1 id="title"> My Profile</h1>
                        <div id="profileline"></div>
                    </div>


                    <div id="profilesmain">

                        <form className="profile-form" onSubmit={UpdateProfile}>
                            <div id="chooseavatar">
                                <div id="button-container">
                                    <img id="avataruploadphoto" src={photo ? photo : "http://localhost:10003/" + avatar} border="0" width="300px" height="150px" />

                                    <label for="uploadbtn" id="btn-container">Upload Image</label>
                                    <input type="file" id="uploadbtn" onChange={imgUpl} />
                                </div>
                            </div>
                            <div id="changing-area">
                                <div id="profileleftside">
                                    <span class="inputtext">First Name</span>
                                    <input type="text" name="firstname" value={firstname} placeholder="First Name" onChange={(e) => { setFirstname(e.target.value) }}></input>

                                    <span class="inputtext">Email</span>
                                    <input type="email" name="email" value={email} placeholder="email@email.com" onChange={(e) => { setEmail(e.target.value) }}></input>


                                    <span class="inputtext">Password</span>
                                    <input type="password" name="password" value={password} placeholder="Type New Password" onChange={(e) => { setPassword(e.target.value) }}></input>
                                    <button type="submit" id="save-btn" onClick={(e) => { UpdateProfile(e) }}>UPDATE</button>
                                </div>
                                <div id="profilerightside">
                                    <span class="inputtext" >Last Name</span>
                                    <input type="text" name="lastname" value={lastname} placeholder="Last Name" onChange={(e) => { setLastname(e.target.value) }}></input>

                                    <span class="inputtext" >Birthday</span>
                                    <input type="text" name="birthday" id="date" value={Moment(new Date(birthday)).format("yyyy-MM-DD")} />

                                    <span class="inputtext">Repeat Password</span>
                                    <input type="password" value={repeatpassword} placeholder="Repeat New Password" onChange={(e) => { setRepeatpassword(e.target.value) }}></input>

                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div >

        </>
    )
}