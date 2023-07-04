import "./style.css"
import React, { useContext } from "react"


import SideMenuOption from "../SideMenuOption/SideMenuOption"
import HideModal from "../HideModal/HideModal"

import AccountCircle from "../MaterialSymbolsRounded/AccountCircle"
import InventoryIcon from "../MaterialSymbolsRounded/InventoryIcon"
import PurchaseHistoryIcon from "../MaterialSymbolsRounded/PurchaseHistoryIcon"
import FriendsIcon from "../MaterialSymbolsRounded/FriendsIcon"
import NotificationIcon from "../MaterialSymbolsRounded/NotificationIcon"
import ShoppingKart from "../MaterialSymbolsRounded/ShoppingKart"
import MarketIcon from "../MaterialSymbolsRounded/MarketIcon"



import LayoutContext from "../../Contexts/LayoutContext/LayoutContext"
import AuthContext from "../../Contexts/AuthContext/AuthContext"


const SideMenu = () => {

    const { showSideMenu, hideSideMenu } = useContext(LayoutContext)

    const { userData, setUserData } = useContext(AuthContext)

    return (

        <>
            <HideModal onClick={hideSideMenu} showContent={showSideMenu} >
                <div className={`SideMenu ${showSideMenu ? "" : "hidden"}`} >
                    <section className="sideMenuSection">
                        {/* <span className="sectionName">
                        Account
                    </span> */}
                        {
                            userData ?
                                <>
                                    <SideMenuOption
                                        icon={<AccountCircle />}
                                        label="My profile"
                                    />
                                    <SideMenuOption
                                        icon={<FriendsIcon />}
                                        label="Friends"
                                    />
                                    <SideMenuOption
                                        label="Inventory"
                                        icon={<InventoryIcon />}
                                        navTo={`/profile/${userData.userId}/inventory`}
                                    />
                                    <SideMenuOption
                                        label="Purchases"
                                        icon={<PurchaseHistoryIcon />}
                                    />
                                    <SideMenuOption
                                        label="Notifications"
                                        icon={<NotificationIcon />}
                                    />
                                </>
                                :
                                <SideMenuOption
                                    label="Login"
                                    icon={<AccountCircle />}
                                    navTo={"/login"}
                                />
                        }
                    </section>
                    <section className="sideMenuSection pokeStoreLinks">
                        <span className="sectionName">
                            {/* PokeStore */}
                        </span>
                        <SideMenuOption
                            icon={<ShoppingKart />}
                            label="Store"
                            navTo={"/store"}
                        />

                        <SideMenuOption
                            icon={<MarketIcon />}
                            label="Market"
                            navTo={"/"}
                        />
                    </section>

                </div>
            </HideModal>

        </>

    )
}

export default SideMenu