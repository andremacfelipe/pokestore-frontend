import "./style.css"
import React, { useContext } from "react"

import LayoutContext from "../../Contexts/LayoutContext/LayoutContext"

const HideModal = ({onClick,children}) => {

    const {showSideMenu} = useContext(LayoutContext)

    return (
        <div className={`HideModal ${showSideMenu ? "" : "hidden"}`} onClick={onClick}>
            {children}
        </div>
    )
} 

export default HideModal
