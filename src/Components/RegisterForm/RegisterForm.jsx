import "./style.css"
import React,{useState,useRef} from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo"


import { register } from "../../services/auth/register";



const RegisterForm = () => {

    const [registerUserInputs,setRegisterUserInputs] = useState({fullname:"",email:"",password:""})
    const [registerError,setRegisterError] = useState()
    const [passwordLengthError,setPasswordLengthError] = useState(null)

    const RegisterFormPasswordRef = useRef()

    const handleChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value

        setRegisterUserInputs({
            ...registerUserInputs,
            [fieldName]:fieldValue
        })
    }

    const handleRegisterSubmit = () => {
        if (RegisterFormPasswordRef.current.value.length < 8){
            setPasswordLengthError("Password must contain at least 8 characters length")
            RegisterFormPasswordRef.current.style.outline = "1px solid red"
            setRegisterUserInputs({
                ...registerUserInputs,
                password:""
            })
        }else if (registerUserInputs.fullname && registerUserInputs.email && registerUserInputs.password.length >= 8){
            register(registerUserInputs)
            .then(res => console.log(res))
            .catch(err => setRegisterError(err.message))
        }
    }




    return (
        <form className="RegisterForm" onSubmit={(e) => e.preventDefault() }>
            <div className="FormBox">
                <Logo />
                <h1>Register on the best pokeshop platform worldwide!</h1>
            </div>
            <input type="text" name="fullname" value={registerUserInputs.fullname} required className="RegisterFormInput" id="fullNameInput" placeholder="Full name..." 
            onChange={handleChange} />
            <input type="email" name="email" value={registerUserInputs.email} className="RegisterFormInput" required id="emailInput" placeholder="Email..."
                onChange={handleChange} 
            />
            <input type="password" required name="password" value={registerUserInputs.password} className="RegisterFormInput" id="passwordInput" placeholder="Password..."
                onChange={handleChange} 
                ref={RegisterFormPasswordRef}
            />
            <span className="passwordLengthError">
                {passwordLengthError ? passwordLengthError : ""}
            </span>
            <button type="submit" className="RegisterButton" onClick={handleRegisterSubmit}>Register</button>
            <span className="alreadyHaveAnAccount">
                Already have an account? <Link className="LoginButtonLink" to="/login">Login</Link>
            </span>
            
        </form>
    )
}


export default RegisterForm