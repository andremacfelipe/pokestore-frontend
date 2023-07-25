import "./style.css"
import React, { useEffect } from "react"

import { PokemonCardTypesBackgroundColor,PokemonCardTypesColors } from "../../misc/styles/PokemonCardColors/PokemonCardColors"

const SellListingCard = ({ item,price, className }) => {
    return (
        <div className="SellListingCard">

            <div className="SellListingsItemNameColumn">
                <div className="SellListingCardItemPic" 
                    style={{
                        boxShadow:`1px 1px 1px ${PokemonCardTypesColors[item.info[0].type.name]}, -1px -1px 1px ${PokemonCardTypesColors[item.info[0].type.name]} `,
                        outline:`1px solid ${PokemonCardTypesColors[item.info[0].type.name]}`
                    }}
                >
                    <img src={item?.itemPic} alt={item?.itemName} />
                </div>
                <div className="SellListingCardItemNameText"
                    style={{
                        color:PokemonCardTypesBackgroundColor[item.info[0].type.name],
                        
                    }}
                >
                    {item?.itemName}
                </div>
            </div>

            <div className="SellListingsItemAmountColumn">
                {item?.amount}
            </div>
            <div className="SellListingsItemPriceColumn">
                {item?.price?.toFixed(2) || price}
            </div>
        </div>
    )
}
export default SellListingCard
