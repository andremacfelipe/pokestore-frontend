import React, {createContext, useState} from "react";

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {

    const [userData,setUserData] = useState(null)


    const logout = () => {
        sessionStorage.clear()
        setUserData(null)
    }


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
