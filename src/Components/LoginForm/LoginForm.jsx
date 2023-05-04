import "./style.css"
import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import Logo from "../Logo/Logo"

import AuthContext from "../../Contexts/AuthContext/AuthContext"

import { login } from "../../services/auth/login"
import { validateSession } from "../../services/auth/validateSession"

const LoginForm = () => {
    const [loginUserInputs, setLoginUserInputs] = useState({ email: "", password: "" })
    const [loginError, setLoginError] = useState(null)
    const [loginLoading, setLoginLoading] = useState(false)

    const navigate = useNavigate()

    const { setUserData, logout } = useContext(AuthContext)

    const handleChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value

        setLoginUserInputs({
            ...loginUserInputs,
            [fieldName]: fieldValue
        })
    }

    const handleLoginSubmit = () => {

        if (loginUserInputs.email && loginUserInputs.password) {
            login(loginUserInputs)
                .then(async res => {
                    setLoginLoading(true)
                    if (!res.ok) {
                        setLoginError(res.response.message)
                        setUserData(null)
                        sessionStorage.clear()
                        throw Error()
                    } else {
                        sessionStorage.setItem("USER_TOKEN", res.response.USER_TOKEN)
                        return res.response.USER_TOKEN
                    }
                }).then(async (token) => {
                    await validateSession(token)
                        .then((res) => {
                            if (!res.ok) {
                                logout()
                            } else {
                                setUserData(res.response)
                                navigate("/")
                            }
                        }).catch(err => {
                            //Token error 
                        })
                }).catch(err => {
                    //Login error
                }).finally(() => {
                    //Add loginLoading in future
                    setLoginLoading(false)
                })
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
                {loginError ? loginError : ""}
            </span>

            <button type="submit" className="LoginButton" onClick={handleLoginSubmit} >Login</button>
            <span className="dontHaveAnAccount">
                Don't have an account yet? <Link className="RegisterButtonLink" to="/register">Register</Link>
            </span>
        </form>
    )
}

export default LoginForm

