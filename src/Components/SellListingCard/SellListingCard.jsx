import "./style.css"
import React from "react"


const SellListingCard = ({ className }) => {
    return (
        <div className="SellListingCard">

            <div className="SellListingsItemNameColumn">
                <div className="SellListingCardItemPic">

                </div>
                <div className="SellListingCardItemNameText">
                    Pikachu the goat
                </div>
            </div>

            <div className="SellListingsItemAmountColumn">
                1.000
            </div>
            <div className="SellListingsItemPriceColumn">
                49.99
            </div>
        </div>
    )
}
export default SellListingCard
