import React from "react"
import "./style.css"

import SideMenu from "../SideMenu/SideMenu"

const Container = ({children}) => {
    return (
        <div className="Container">
            <SideMenu />
            {children}
        </div>
    )
}

export default Container