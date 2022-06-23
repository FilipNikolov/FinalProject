import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "./Nav";
import "../css/login.css";

export const Login = () => {

    const formDataInit = {
        email: String,
        password: String
    }

    const [formData, setFormData] = useState(formDataInit);
    const [loggedin, setLoggedin] = useState(false);
    const navigator = useNavigate();
    const token = localStorage.getItem('jwt');



    const submit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            let res = await fetch('http://localhost:10001/api/v1/auth/login', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'content-type': 'application/json'
                }
            });
            if (!res.ok) {
                throw 'Cannot login!';
            }
            let data = await res.json();
            localStorage.setItem('jwt', data.token);
            if (data.token) {
                setLoggedin(true)
                navigator('/profile')
            }
        } catch (err) {
            alert(err);
        }
    };


    const removeToken = () => {
        localStorage.setItem('jwt', null)
        setLoggedin(false)

    }

    const inputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    // const formDataInit = {
    //     email: String,
    //     password: String
    // };

    // const [formData, setFormData] = useState(formDataInit);

    // const submit = async (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    //     try {
    //         let res = await fetch('http://localhost:10001/api/v1/auth/login', {
    //             method: 'POST',
    //             body: JSON.stringify(formData),
    //             headers: {
    //                 'content-type': 'application/json'
    //             }
    //         });
    //         if (!res.ok) {
    //             throw 'Error logging in';
    //         }
    //         let data = await res.json();
    //         localStorage.setItem('jwt', data.token);
    //     } catch (err) {
    //         alert(err);
    //     }
    // };

    // const inputChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     });
    // };

    return (
        <><Nav />
            <div id="loginpage">
                <div id="login-area">
                    <div id="login-line">
                        <h1 id="title">Log In</h1>
                        <div id="loginline"></div>
                    </div>
                    <div id="loginsmain">
                        <div id="loginswelcome">
                            <div id="text-area">
                                <div id="wlctitle">
                                    <h1 className="welcome">Welcome</h1>
                                    <h1 className="welcome"> to</h1>
                                    <h1 className="babys">Baby's</h1>
                                </div>
                                <div id="text-left">
                                    <span>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                                        only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                                        in the 1960s with
                                        the release of Letraset sheets containing Lorem Ipsum
                                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div id="loginblock">
                            {loggedin === false ?
                                <form onSubmit={submit} id="login-form">
                                    <span class="inputtxt">Email</span>
                                    <label className="login-area">
                                        <input type="email" name="email" value={formData.email} onChange={inputChange} placeholder="user@domain.com" />
                                    </label>
                                    <span class="inputtxt">Password</span>
                                    <label className="login-area">
                                        <input type="password" name="password" value={formData.password} onChange={inputChange} placeholder="******" />
                                    </label>
                                    <button type="submit" className="login-btn">LOG IN</button>
                                </form>
                                :
                                <div>
                                    <h1 className="login-text">Logged in</h1>
                                    <button onClick={removeToken} className="login-btn">Log Out</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
