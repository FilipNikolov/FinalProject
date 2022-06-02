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
    const submit = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch('/api/v1/auth/register', {
                method: 'POST',
                body: JSON.stringify(regData),
                headers: {
                    'content-type': 'application/json'
                }
            });

        } catch (err) {
            alert(err)
        }
    };

    return (

        <div class="container">
            <div class="CreateAcc">
                <h1>Create Account</h1>
            </div>
            <div>
                <h1>Type none</h1>
            </div>
            <div class="Lorem">
                <div id="title">
                    <h1 id="orangetitle">Create your</h1>
                    <h1 id="greytitle">account</h1>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lectus ac risus consectetur blandit non et ante. Vestibulum ut ornare est. In feugiat eu lectus id rutrum. Sed quis magna orci.
                    Pellentesque mollis velit vel euismod pharetra. Etiam pretium nunc eget ipsum vulputate mattis. Aliquam luctus at dolor non cursus.
                </p>
            </div>
            <div class="Form">
                <form onSubmit={submit} class="mainform">
                    <div class="form">
                        <span>First Name</span>
                        <input type="text" name="firstname" value={RegDataInit.firstname} onChange={inputChange}></input>
                    </div>
                    <div class="form">
                        <span>Last Name</span>
                        <input type="text" name="lastname" value={RegDataInit.lastname} onChange={inputChange}></input>
                    </div>
                    <div class="form">
                        <span>Email</span>
                        <input type="email" name="email" value={RegDataInit.email} onChange={inputChange}></input>
                    </div>
                </form>
                <form onSubmit={submit} class="mainformtwo">
                    <div class="form">
                        <span>Birthday</span>
                        <input type="date" name="birthday" value={RegDataInit.birthday} onChange={inputChange}></input>
                    </div>
                    <div class="form">
                        <span>Password</span>
                        <input type="password" name="password" value={RegDataInit.password} onChange={inputChange}></input>
                    </div>
                    <div class="form">
                        <span>Repeat Password</span>
                        <input type="password" name="repeatpassword" value={RegDataInit.repeatpassword} onChange={inputChange}></input>
                    </div>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </div >




    )
}


