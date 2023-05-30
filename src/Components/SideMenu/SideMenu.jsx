import "./style.css"
import React, { useContext } from "react"

import SideMenuOption from "../SideMenuOption/SideMenuOption"

import AccountCircle from "../MaterialSymbolsRounded/AccountCircle"
import InventoryIcon from "../MaterialSymbolsRounded/InventoryIcon"
import PurchaseHistoryIcon from "../MaterialSymbolsRounded/PurchaseHistoryIcon"
import FriendsIcon from "../MaterialSymbolsRounded/FriendsIcon"
import NotificationIcon from "../MaterialSymbolsRounded/NotificationIcon"


import LayoutContext from "../../Contexts/LayoutContext/LayoutContext"

const SideMenu = () => {

    const { showSideMenu, setShowSideMenu } = useContext(LayoutContext)

    return (

        <div className={`SideMenu ${showSideMenu ? "" : "hidden"}`} >
            <section className="sideMenuSection">
                <span className="sectionName">
                    Account
                </span>
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
                />
                <SideMenuOption
                    label="Purchases"
                    icon={<PurchaseHistoryIcon />}
                />
                <SideMenuOption
                    label="Notifications"
                    icon={<NotificationIcon/>}
                />

            </section>

        </div>

    )
}

export default SideMenu