import "./style.css"
import React from "react"


const SellListingCard = ({ className }) => {
    return (
        <div className="SellListingCard">

            <div className="SellListingCardItemPic">

            </div>
            <div className="SellListingCardItemName">
                Pikachu the goat
            </div>

            <div className="SellListingCardItemAmount">
                1.000
            </div>
            <div className="SellListingCardItemPrice">
                49.99
            </div>
        </div>
    )
}
export default SellListingCard
