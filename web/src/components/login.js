import React, { useState, useEffect } from "react";
import "../css/login.css";

export const Login = () => {

    const formDataInit = {
        email: String,
        password: String
    }

    const [formData, setFormData] = useState(formDataInit);
    const [loggedin, setLoggedin] = useState(false);

    const token = localStorage.getItem('jwt');

    useEffect(() => {
        if (token === null) {
            setLoggedin(false)
        }
        else if (token) {
            setLoggedin(true)
        }
        console.log(token)
    }, [])

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

    return (
        <div id="loginpage">
            <div id="login-area">
                <div id="login-line">
                    <h1 id="title">Log In</h1>
                    <div id="loginline"></div>
                </div>
                <div id="text-area">
                    <h1 className="welcome">Welcome to </h1>
                    <h1 className="welcome"> Baby's</h1>
                    <div id="text-left">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages
                        </span>
                    </div>
                </div>
                {loggedin === false ?
                    <form onSubmit={submit} id="login-form">
                        <label className="login-area">
                            <span>Username</span>
                            <input type="email" name="email" value={formData.email} onChange={inputChange} />
                        </label>
                        <label className="login-area">
                            <span>Password</span>
                            <input type="password" name="password" value={formData.password} onChange={inputChange} />
                        </label>
                        <button type="submit" className="login-btn">Log in</button>
                    </form>
                    :
                    <div>
                        <h1 className="login-text">Logged in</h1>
                        <button onClick={removeToken} className="login-btn">Log Out</button>
                    </div>
                }
            </div>
        </div>
    )
}
