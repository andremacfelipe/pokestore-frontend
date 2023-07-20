import "./style.css"
import React from "react"

import SellListingCard from "../SellListingCard/SellListingCard"

const SellListings = ({items}) => {
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
                {
                    items?.map((item,key) => {
                        return (
                            <SellListingCard
                                item={item}
                                key={key}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}




export default SellListings



