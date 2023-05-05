import "./style.css"
import React from "react"

import SellListingCard from "../SellListingCard/SellListingCard"

const SellListings = () => {
    return (
        <div className="SellListings">

            <div className="SellListingsTableRows">
                <div className="SellListingsHeader">
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



