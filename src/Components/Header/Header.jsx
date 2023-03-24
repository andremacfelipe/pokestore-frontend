import React from "react";
import "./style.css"

import Logo from "../Logo/Logo";
import ShoppingKart from "../MaterialSymbolsRounded/ShoppingKart";
import MenuIcon from "../MaterialSymbolsRounded/MenuIcon";
import AccountCircle from "../MaterialSymbolsRounded/AccountCircle";


const Header = () => {
    return (
        <header className="Header">
            <MenuIcon />
            <Logo />
            <div className="HeaderRegisterAndLoginContainer">
                <AccountCircle />
                <button>
                    Login
                </button>
                <span className="headerText">or</span>
                <button>Register</button>
            </div>
            <div className="HeaderMisc">
                <ShoppingKart />
            </div>
        </header>
    )
}

export default Header
