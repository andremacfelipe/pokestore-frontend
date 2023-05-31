import React, { useContext } from "react";
import "./style.css"

import { Outlet, Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import MenuIcon from "../MaterialSymbolsRounded/MenuIcon";
import AccountCircle from "../MaterialSymbolsRounded/AccountCircle";
import LogoutIcon from "../MaterialSymbolsRounded/LogoutIcon";

import AuthContext from "../../Contexts/AuthContext/AuthContext";
import LayoutContext from "../../Contexts/LayoutContext/LayoutContext";


const Header = () => {

    const { userData, logout } = useContext(AuthContext)
    const { hideSideMenu, isMobile } = useContext(LayoutContext)

    if (!isMobile) {
        return (
            <>
                <header className="Header">
                    <MenuIcon onClick={hideSideMenu} />
                    <div className="headerDBox">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className="HeaderContainer">
                        {
                            !userData ?
                                <>
                                    <div className="userContainer">
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
                                </>
                                :
                                <>
                                    <div className="userLoggedContainer">
                                        <AccountCircle />
                                        <span className="headerText">
                                            {`${userData.username.toUpperCase()}`}
                                        </span>
                                    </div>

                                    <div className="logoutContainer" title="logout">
                                        <LogoutIcon onClick={logout} />
                                    </div>
                                </>
                        }
                    </div>

                </header>
                <Outlet />

            </>
        )
    } else {
        return (
            <>
                <header className="Header">
                    <MenuIcon onClick={hideSideMenu} />
                    <div className="headerDBox">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className="HeaderContainer">
                        {
                            !userData ?
                                <>
                                    <div className="userContainer">
                                        <Link to="/login" className="loginLink">
                                            <button>
                                                Login
                                            </button>
                                        </Link>
                                    </div>

                                </>
                                :
                                <>
                                    <div className="logoutContainer" title="logout">
                                        <LogoutIcon onClick={logout} />
                                    </div>
                                </>
                        }
                    </div>

                </header>
                <Outlet />

            </>
        )
    }
}

export default Header
