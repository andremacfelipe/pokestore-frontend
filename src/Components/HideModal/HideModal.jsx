import "./style.css"
import React, { useContext } from "react"



const HideModal = ({onClick,children,showContent}) => {


    return (
        <div className={`HideModal ${showContent ? "" : "hidden"}`} onClick={onClick}>
            {children}
        </div>
    )
} 

export default HideModal
