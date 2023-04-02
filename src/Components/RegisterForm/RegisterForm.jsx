import "./style.css"
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo"


import { register } from "../../services/auth/register";



const RegisterForm = () => {

    const [registerUserInputs, setRegisterUserInputs] = useState({ username: "", email: "", password: "" })
    const [registerInputError, setRegisterInputError] = useState({ path: "" })
    const [passwordLengthError, setPasswordLengthError] = useState(null)


    const RegisterFormUsernameRef = useRef()
    const RegisterFormEmailRef = useRef()
    const RegisterFormPasswordRef = useRef()
    useEffect(() => {
        switch (registerInputError.path) {
            case "username":
                RegisterFormUsernameRef.current.style.outline = "1px solid red"
                break;
            case "email":
                RegisterFormEmailRef.current.style.outline = "1px solid red"
                break;

            default:
                break;
        }


    }, [registerInputError])

    useEffect(() => {

        if (passwordLengthError){
            RegisterFormPasswordRef.current.style.outline = "1px solid red"
        }

    },[passwordLengthError])




    const handleChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value

        setRegisterUserInputs({
            ...registerUserInputs,
            [fieldName]: fieldValue
        })
    }

    const handleRegisterSubmit = () => {
        if (RegisterFormPasswordRef.current.value.length < 8) {
            setPasswordLengthError("Password must contain at least 8 characters length")
            RegisterFormPasswordRef.current.style.outline = "1px solid red"
            setRegisterUserInputs({
                ...registerUserInputs,
                password: ""
            })
        } else if (registerUserInputs.username && registerUserInputs.email && registerUserInputs.password.length >= 8) {
            register(registerUserInputs)
                .then(res => {
                    if (!res.ok) {
                        setRegisterInputError(res.response)
                        throw Error()
                    } else {
                        console.log(res.response)
                    }
                })
                .catch(err => {})
        }
    }




    return (
        <form className="RegisterForm" onSubmit={(e) => e.preventDefault()}>
            <div className="FormBox">
                <Logo />
                <h1>Register on the best pokeshop platform worldwide!</h1>
            </div>
            <input type="text" name="username" value={registerUserInputs.username} required className="RegisterFormInput" id="userameInput" placeholder="Username..."
                onChange={handleChange}
                onFocus={(e) => {e.target.style.outline = "1px solid #99999955"}}
                ref={RegisterFormUsernameRef} />
            <span className="usernameError inputError">
                {registerInputError.path === "username" ? registerInputError.message + "*" : ""}
            </span>
            <input type="email" name="email" value={registerUserInputs.email} className="RegisterFormInput" required id="emailInput" placeholder="Email..."
                onChange={handleChange}
                onFocus={(e) => {e.target.style.outline = "1px solid #99999955"}}
                ref={RegisterFormEmailRef}
            />
            <span className="emailError inputError">
                {registerInputError.path === "email" ? registerInputError.message + "*" : ""}
            </span>
            <input type="password" required name="password" value={registerUserInputs.password} className="RegisterFormInput" id="passwordInput" placeholder="Password..."
                onChange={handleChange}
                onFocus={(e) => {e.target.style.outline = "1px solid #99999955"}}
                ref={RegisterFormPasswordRef}
            />
            <span className="passwordLengthError">
                {passwordLengthError ? passwordLengthError + "*" : ""}
            </span>
            <button type="submit" className="RegisterButton" onClick={handleRegisterSubmit}>Register</button>
            <span className="alreadyHaveAnAccount">
                Already have an account? <Link className="LoginButtonLink" to="/login">Login</Link>
            </span>
        </form>
    )
}


export default RegisterForm