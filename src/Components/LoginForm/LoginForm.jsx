import "./style.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"

import Logo from "../Logo/Logo"

const LoginForm = () => {
    const [loginUserInputs,setLoginUserInputs] = useState({email:"",password:""})

    const handleChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value

        setLoginUserInputs({
            ...loginUserInputs,
            [fieldName]: fieldValue
        })
    }



    return (
        <form className="LoginForm">
            <div className="FormBox">
                <Logo />
                <h1>Login</h1>
            </div>
            <input type="email" name="email" value={loginUserInputs.email} required className="LoginFormInput" id="emailInput" 
                placeholder="Email..."
                onChange={handleChange}
            />
            <input type="password" required name="password" value={loginUserInputs.password}
                className="LoginFormInput" id="passwordInput" placeholder="Password..."
                onChange={handleChange}
                
            />

            <button type="submit" className="LoginButton">Login</button>
            <span className="dontHaveAnAccount">
                Don't have an account yet? <Link className="RegisterButtonLink" to="/register">Register</Link>
            </span>

        </form>
    )
}

export default LoginForm

