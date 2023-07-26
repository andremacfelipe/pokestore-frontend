import React, { createContext, useEffect, useState } from "react";

import { validateSession } from "../../services/auth/validateSession";


const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null)


    const logout = () => {
        sessionStorage.clear()
        setUserData(null)
    }


    useEffect(() => {
        if (!userData && sessionStorage.getItem("USER_TOKEN")) {
            validateSession(sessionStorage.getItem("USER_TOKEN"))
                .then((res) => {
                    console.log("renderizou")
                    if (!res.ok) {
                        logout()
                    } else {
                        setUserData(res.response)
                    }
                })
        }
    }, [userData])

    const updateUserData = async () => {
        try {
            const updatedData = await validateSession(sessionStorage.getItem("USER_TOKEN"))
            if (!updatedData.ok) {
                throw new Error("UM erro de atualização de dados")
            } else {
                setUserData(updatedData.response)
            }

        } catch (error) {

        }
    }

    return (
        <AuthContext.Provider
            value={{
                userData,
                setUserData,
                updateUserData,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext
