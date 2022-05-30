import React, { useState } from "react";
import "../css/register.css";

export function CreateAcc() {
    const RegDataInit = {
        firstname: "",
        lastname: "",
        email: "",
        birthday: "",
        password: "",
        repeatpassword: "",
    };
    const [regData, setRegData] = useState(RegDataInit);
    const inputChange = (e) => {
        setRegData({
            ...regData,
            [e.target.name]: e.target.value
        });
    };


    return (
        <form id="create-acc">
            <label>
                <span>First Name</span>
                <input type="text" name="firstname" value={RegDataInit.firstname} onChange={inputChange}></input>
            </label>
            <label>
                <span>Last Name</span>
                <input type="text" name="lastname" value={RegDataInit.lastname} onChange={inputChange}></input>
            </label>
            <lable>
                <span>Email</span>
                <input type="email" name="email" value={RegDataInit.email} onChange={inputChange}></input>
            </lable>
            <label>
                <span>Birthday</span>
                <input type="date" name="birthday" value={RegDataInit.birthday} onChange={inputChange}></input>
            </label>
            <label>
                <span>Password</span>
                <input type="password" name="password" value={RegDataInit.password} onChange={inputChange}></input>
            </label>
            <label>
                <span>Repeat Password</span>
                <input type="password" name="repeatpassword" value={RegDataInit.repeatpassword} onChange={inputChange}></input>
            </label>
            <button type="submit">CreateAcc</button>
        </form>
    )
}