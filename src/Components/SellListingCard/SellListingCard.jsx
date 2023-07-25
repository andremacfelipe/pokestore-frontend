import "./style.css"
import React, { useEffect } from "react"
import { useNavigate } from "react-router"

import { PokemonCardTypesBackgroundColor, PokemonCardTypesColors } from "../../misc/styles/PokemonCardColors/PokemonCardColors"

const SellListingCard = ({ item, price, action,onClick,navigateTo, className }) => {

    const navigate = useNavigate()

    return (
        
            <tr className="SellListingCard"
                onClick={navigateTo? () => navigate(`/market/item/${item?.itemName}`) : () => {return }}
            >

                <td
                    className="SellListingsItemNameColumn"

                >
                    <div className="SellListingCardItemPic"
                        style={{
                            boxShadow: `1px 1px 1px ${PokemonCardTypesColors[item.info[0].type.name]}, -1px -1px 1px ${PokemonCardTypesColors[item.info[0].type.name]} `,
                            outline: `1px solid ${PokemonCardTypesColors[item.info[0].type.name]}`
                        }}
                    >
                        <img src={item?.itemPic} alt={item?.itemName} />
                    </div>
                    <div className="SellListingCardItemNameText"
                        style={{
                            color: PokemonCardTypesBackgroundColor[item.info[0].type.name],

                        }}
                    >
                        {item?.itemName}
                    </div>
                </td>

                <td className="SellListingsItemColumn">
                    {item?.amount}
                </td>
                <td className="SellListingsItemColumn">
                    {item?.price?.toFixed(2) || item?.market?.price.toFixed(2)}

                </td>
                
                    {
                        action ?
                        <td className="SellListingsActionColumn">
                            <button className="actionButton" onClick={action.action}>
                                {action?.name}
                            </button>
                        </td>
                            :

                            <>
                            </>
                        
                    }
                


            </tr>
        
    )
}
export default SellListingCard
