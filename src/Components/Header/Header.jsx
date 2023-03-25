import React from "react";
import "./style.css"

import { Outlet, Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import ShoppingKart from "../MaterialSymbolsRounded/ShoppingKart";
import MenuIcon from "../MaterialSymbolsRounded/MenuIcon";
import AccountCircle from "../MaterialSymbolsRounded/AccountCircle";
import SearchBar from "../SearchBar/SearchBar";





const Header = () => {
    return (
        <>
            <header className="Header">
                <MenuIcon />
                <div className="headerDBox">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <SearchBar />

                <div className="HeaderRegisterAndLoginContainer">
                    <AccountCircle />
                    <Link to="/login" className="loginLink">
                        <button>
                            Login
                        </button>
                    </Link>
                    <span className="headerText">or</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="HeaderMisc">
                    <ShoppingKart />
                </div>
            </header>
            <Outlet />

        </>
    )
}

export default Header
