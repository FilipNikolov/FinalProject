import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/register.css";
import Moment from "moment";

export const CreateAcc = () => {

    const RegDataInit = {
        firstname: String,
        lastname: String,
        password: String,
        email: String,
        birthday: Date

    };
    const navigator = useNavigate();
    const [regData, setRegData] = useState(RegDataInit);

    const inputChange = (e) => {
        setRegData({
            ...regData,
            [e.target.name]: (e.target.name != 'birthday' ? e.target.value : Moment(new Date(e.target.value)).format("yyyy-MM-DD"))


        });
    };

    const submit = async (e) => {

        try {
            let res = await fetch('http://localhost:10001/api/v1/auth/register', {
                method: 'POST',
                body: JSON.stringify(regData),
                headers: {
                    'content-type': 'application/json'
                }

            });
            if (!res.ok) {
                throw 'Cannot create account!'
            }
            res = await res.json();
            localStorage.setItem("acc", res);
            navigator('/');
        } catch (err) {
            alert(err)
        }
    };

    return (
        <div id="registerpage">
            <div id="register-area">
                <div id="register-line">
                    <h1 id="title"> Create Account</h1>
                    <div id="regline"></div>
                </div>

                <div className="Lorem">
                    <div id="title">
                        <h1 id="orangetitle">Create your</h1>
                        <h1 id="greytitle">account</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lectus ac risus consectetur blandit non et ante. Vestibulum ut ornare est. In feugiat eu lectus id rutrum. Sed quis magna orci.
                        Pellentesque mollis velit vel euismod pharetra. Etiam pretium nunc eget ipsum vulputate mattis. Aliquam luctus at dolor non cursus.
                    </p>
                </div>
                <div className="Form">
                    <form onSubmit={submit} className="mainform">
                        <div className="form">
                            <span>First Name</span>
                            <input type="text" name="firstname" value={regData.firstname} onChange={inputChange}></input>
                        </div>
                        <div className="form">
                            <span>Last Name</span>
                            <input type="text" name="lastname" value={regData.lastname} onChange={inputChange}></input>
                        </div>
                        <div className="form">
                            <span>Email</span>
                            <input type="email" name="email" value={regData.email} onChange={inputChange}></input>
                        </div>
                    </form>
                    <form onSubmit={submit} className="mainformtwo">
                        <div className="form">
                            <span>Birthday</span>
                            <input type="date" name="birthday" value={Moment(new Date(regData.birthday)).format("yyyy-MM-DD")} onChange={inputChange}></input>
                        </div>
                        <div className="form">
                            <span>Password</span>
                            <input type="password" name="password" value={regData.password} onChange={inputChange}></input>
                        </div>
                        <button type="submit">Create Account</button>
                    </form>
                </div>
            </div>
        </div >




    )
}


