import "./style.css"
import React, { useContext } from "react"
import { NavLink } from "react-router-dom"

import LayoutContext from "../../Contexts/LayoutContext/LayoutContext"


const SideMenuOption = ({ icon, label, navTo }) => {

    const { hideSideMenu } = useContext(LayoutContext)

    if (!!navTo) {
        return (
            <NavLink
                className="SideMenuOption"
                to={navTo}
                style={
                    ({ isActive }) => {
                        return {
                            backgroundColor: isActive ? "#e1e1e1" : ""
                        }
                    }
                }
                onClick={hideSideMenu}
            >

                {icon}

                <span className="optionLabel">
                    {label}

                </span>
            </NavLink>
        )
    } else {
        return (
            <div
                className="SideMenuOption"
                onClick={hideSideMenu}
            >

                {icon}

                <span className="optionLabel">
                    {label}

                </span>
            </div>
        )
    }
}

export default SideMenuOption
