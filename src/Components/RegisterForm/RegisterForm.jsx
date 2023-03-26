import "./style.css"
import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo"



const RegisterForm = () => {
    return (
        <form className="RegisterForm">
            <div className="FormBox">
                <Logo />
                <h1>Register on the best pokeshop platform worldwide!</h1>
            </div>
            <input type="text" name="fullname" className="RegisterFormInput" id="fullNameInput" placeholder="Full name..." />
            <input type="email" name="email" className="RegisterFormInput" id="emailInput" placeholder="Email..."/>
            <input type="password" name="password" className="RegisterFormInput" id="passwordInput" placeholder="Password..."/>
            <button type="submit" className="RegisterButton">Register</button>
            <span className="alreadyHaveAnAccount">
                Already have an account? <Link className="LoginButtonLink" to="/login">Login</Link>
            </span>
            
            
        </form>
    )
}


export default RegisterForm