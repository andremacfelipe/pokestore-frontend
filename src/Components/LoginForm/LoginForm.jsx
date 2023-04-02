import "./style.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"

import Logo from "../Logo/Logo"

import { login } from "../../services/auth/login"

const LoginForm = () => {
    const [loginUserInputs,setLoginUserInputs] = useState({email:"",password:""})
    const [loginError,setLoginError] = useState(null)

    const handleChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value

        setLoginUserInputs({
            ...loginUserInputs,
            [fieldName]: fieldValue
        })
    }

    const handleLoginSubmit = () => {

        if (loginUserInputs.email && loginUserInputs.password){
            login(loginUserInputs)
            .then(res => {
                if (!res.ok){
                    console.log(res.response)
                    setLoginError(res.response.message)
                    throw Error()
                }else{
                    console.log(res.response)
                }
            } ).catch(err => {console.log("um erro")})
        }


    }




    return (
        <form className="LoginForm" onSubmit={(e) => e.preventDefault()}>
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
            <span className="LoginErrorMessage">

            </span>

            <button type="submit" className="LoginButton" onClick={ handleLoginSubmit } >Login</button>
            <span className="dontHaveAnAccount">
                Don't have an account yet? <Link className="RegisterButtonLink" to="/register">Register</Link>
            </span>
            <pre>{JSON.stringify(loginUserInputs,null,2)}</pre>
        </form>
    )
}

export default LoginForm

