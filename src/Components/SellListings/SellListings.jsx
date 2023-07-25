import "./style.css"
import React from "react"
import { Link } from "react-router-dom"

import SellListingCard from "../SellListingCard/SellListingCard"

const SellListings = ({ items,col1,col2,col3 }) => {
    return (
        <div className="SellListings">

            <div className="SellListingsTable">
                <div className="SellListingsHeader SellListingsTableRow">
                    <div className="SellListingsItemNameColumn">
                        {col1}
                    </div>
                    <div className="SellListingsItemAmountColumn">
                        {col2}
                    </div>
                    <div className="SellListingsItemPriceColumn">
                        {col3}
                    </div>
                </div>
                {
                    items?.map((item, key) => {
                        return (
                            <Link
                                to={`/market/item/${item.itemName}`}
                                className="linkDefault"
                            >
                                <SellListingCard
                                    item={item}
                                    key={key}
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}




export default SellListings



