import "./style.css"
import React from "react"

import AccountCircle from "../MaterialSymbolsRounded/AccountCircle"


const SideMenuOption = ({icon,label}) => {
    return (
        <div className="SideMenuOption">
            
                {icon}
            
            <span className="optionLabel">
                {label}
                
            </span>
        </div>
    )
}

export default SideMenuOption
