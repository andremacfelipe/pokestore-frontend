import "./style.css"
import React,{useState} from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo"


import { register } from "../../services/auth/register";



const RegisterForm = () => {

    const [registerUserInputs,setRegisterUserInputs] = useState({fullname:"",email:"",password:""})

    const handleChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value

        setRegisterUserInputs({
            ...registerUserInputs,
            [fieldName]:fieldValue
        })
    }

    const handleRegisterSubmit = () => {
        if (registerUserInputs.fullname && registerUserInputs.email && registerUserInputs.password){
            register(registerUserInputs)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }



    return (
        <form className="RegisterForm" onSubmit={(e) => e.preventDefault() }>
            <div className="FormBox">
                <Logo />
                <h1>Register on the best pokeshop platform worldwide!</h1>
            </div>
            <input type="text" name="fullname" className="RegisterFormInput" id="fullNameInput" placeholder="Full name..." 
            onChange={handleChange} />
            <input type="email" name="email" className="RegisterFormInput" id="emailInput" placeholder="Email..."
                onChange={handleChange} 
            />
            <input type="password" name="password" className="RegisterFormInput" id="passwordInput" placeholder="Password..."
                onChange={handleChange} 
            />
            <button type="submit" className="RegisterButton" onClick={handleRegisterSubmit}>Register</button>
            <span className="alreadyHaveAnAccount">
                Already have an account? <Link className="LoginButtonLink" to="/login">Login</Link>
            </span>
        </form>
    )
}


export default RegisterForm