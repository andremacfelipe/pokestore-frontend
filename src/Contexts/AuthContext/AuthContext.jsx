import React, {createContext, useEffect, useState} from "react";

import { validateSession } from "../../services/auth/validateSession";


const AuthContext = createContext({})

export const AuthProvider = ({children}) => {

    const [userData,setUserData] = useState(null)


    const logout = () => {
        sessionStorage.clear()
        setUserData(null)
    }


    useEffect(() => {
        if (!userData && sessionStorage.getItem("USER_TOKEN")){
            validateSession(sessionStorage.getItem("USER_TOKEN"))
            .then((res) => {
                if(!res.ok){
                    logout()
                }else{
                    setUserData(res.response)
                }
            })
        } 
    },[])

    return(
        <AuthContext.Provider
        value={{
            userData,
            setUserData,
            logout
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext
