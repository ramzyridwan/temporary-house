import React from "react";
import './LoginPage.css';
import LoginImages from '../assets/LoginImages.jpeg'
import GoogleImages from '../assets/googleIcon.png'
import FacebookImages from '../assets/facebookIcon.png'

const LoginPage = () => {

    return(
        <div className="container">
            <div className="row middle-form background-color">
                <div className="col-md-6  padding-form login-side">
                    <h3 className="text-align-left padding-text font-size1">WELCOME TO</h3>
                    <h3 className="text-align-right font-size2 padding-text">TEMPORARY</h3>
                    <h3 className="text-align-left padding-text font-size2 margin-text">HOUSE</h3>

                    <input type="text" className="form-control middle-input margin-input" placeholder="Your login or e-mail" />
                    <input type="text" className="form-control middle-input" placeholder="Password" />

                    <div className="row button-margin">
                        <a href="#" className="col-md-4 register">Register</a>
                        <a href="#" className="col-md-4 forgotPassword">Forgot Password</a>
                        <a href="#" className="col-md-4 signIn">Sign In</a>
                    </div>

                    <div className="row">
                        <p className="col-md-4">Login With</p>
                        <img src={GoogleImages} className=" col-md-4 login-logo" />
                        <img src={FacebookImages} className=" col-md-4 login-logo" />
                    </div>
                </div>

                <div className="col-md-6 colmd-padding">
                    <img src={LoginImages} className="img-responsive image-Login" alt="Responsive image" />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;