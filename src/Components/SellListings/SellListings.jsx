import "./style.css"
import React from "react"

import SellListingCard from "../SellListingCard/SellListingCard"

const SellListings = () => {
    return (
        <div className="SellListings">

            <div className="SellListingsTable">
                <div className="SellListingsHeader SellListingsTableRow">
                    <div className="SellListingsItemNameColumn">
                        NAME
                    </div>
                    <div className="SellListingsItemAmountColumn">
                        AMOUNT
                    </div>
                    <div className="SellListingsItemPriceColumn">
                        PRICE
                    </div>
                </div>
            </div>
        </div>
    )
}




export default SellListings



