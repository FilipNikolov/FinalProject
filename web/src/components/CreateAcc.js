import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "./Nav";
import "../css/register.css";
import Moment from "moment";

export const CreateAcc = () => {

    const RegDataInit = {
        firstname: String,
        lastname: String,
        password: String,
        repeatpassword: String,
        email: String,
        birthday: Date,
        avatar: String

    };
    const navigator = useNavigate();
    const [regData, setRegData] = useState({ RegDataInit });



    const submit = async (e) => {
        e.preventDefault()
        try {
            if (regData.repeatpassword !== regData.password) {
                throw new Error("Passwords Doesen't Match!")
            }
            let res = await fetch('http://localhost:10001/api/v1/auth/register', {
                method: 'POST',
                body: JSON.stringify(regData),
                headers: {
                    'content-type': 'application/json'
                }

            });
            if (!res.ok) {
                throw new Error("Cannot Create Acc!")
            }
            navigator('/login');
            alert('Account created!');

        } catch (err) {
            alert(err)
        }
    };

    const inputChange = (e) => {
        setRegData({
            ...regData,
            [e.target.name]: (e.target.name !== 'birthday' ? e.target.value : Moment(new Date(e.target.value)).format("yyyy-MM-DD"))


        });
    };

    return (
        <><Nav />
            <div id="registerpage">
                <div id="register-area">
                    <div id="register-line">
                        <h1 id="title"> Create Account</h1>
                        <div id="regline"></div>
                    </div>

                    <div id="registersmain">
                        <div id="registerswelcome">
                            <div id="text-area">
                                <div id="createtitle">
                                    <h1 className="create-text">Create your</h1>
                                    <h1 className="acc-text">account</h1>
                                </div>
                                <div id="registertext">
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

                        <div id="registersblock">
                            <form onSubmit={submit} className="register-form">
                                <div id="createacc-area">
                                    <div id="leftside">
                                        <span class="inputtxt">First Name</span>
                                        <input type="text" name="firstname" value={regData.firstname} onChange={inputChange} placeholder="First Name"></input>

                                        <span class="inputtxt">Email</span>
                                        <input type="email" name="email" value={regData.email} onChange={inputChange} placeholder="Email"></input>


                                        <span class="inputtxt">Password</span>
                                        <input type="password" name="password" value={regData.password} onChange={inputChange} placeholder="Password"></input>
                                        <button type="submit" id="acc-btn">CREATE ACCOUNT</button>
                                    </div>
                                    <div id="rightside">
                                        <span class="inputtxt">Last Name</span>
                                        <input type="text" name="lastname" value={regData.lastname} onChange={inputChange} placeholder="Last Name"></input>
                                        <span class="inputtxt">Birthday</span>
                                        <input type="date" name="birthday" id="date" value={Moment(new Date(regData.birthday)).format("yyyy-MM-DD")} onChange={inputChange} placeholder="00-00-0000"></input>
                                        <span class="inputtxt">Repeat Password</span>
                                        <input type="password" name="repeatpassword" value={regData.repeatpassword} onChange={inputChange} placeholder="Repeat Password"></input>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>




    )
}


