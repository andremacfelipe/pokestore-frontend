import "./style.css";
import React, { useEffect, useState } from "react";

import PokemonCardIconImage from "../PokemonCardIconImage/PokemonCardIconImage";

import { PokemonCardTypesColors } from "../../misc/styles/PokemonCardColors/PokemonCardColors";



const ItemInfoCard = ({ itemId }) => {

    const [currentItem, setCurrentItem] = useState(null)

    useEffect(() => {
        if (itemId) {
            fetch(`${process.env.REACT_APP_API_URL}/api/item/${itemId}`)
                .then(res => res.json())
                .then(data => setCurrentItem(data))
        }
    }, [itemId])


    return (
        <div
            className="ItemInfoCard"
            style={{
                outline: `2px solid ${PokemonCardTypesColors[currentItem?.itemInfo.pokemonTypes[0].type.name]}`,
                borderRadius: "4px"
            }}
        >
            <div
                className="itemPicContainer"
                style={{
                    outline: `3px solid ${PokemonCardTypesColors[currentItem?.itemInfo.pokemonTypes[0].type.name]}`,
                    borderRadius: "4px"
                }}
            >
                <img src={currentItem?.currentItem.itemPic || ""} alt={currentItem?.currentItem.itemName} />
            </div>
            <div className="itemInfo">
                <span className="itemName">
                    {currentItem?.currentItem.itemName}
                </span>
                <div className="itemStats">
                    <div className="baseHp">
                        Hp: {currentItem?.itemInfo.pokemonBaseHp}
                    </div>
                    <div className="baseAttack">
                        Attack: {currentItem?.itemInfo.pokemonBaseAttack}
                    </div>
                    <div className="baseDefense">
                        Defense: {currentItem?.itemInfo.pokemonBaseDefense}
                    </div>
                    <div className="baseSpeed">
                        Speed: {currentItem?.itemInfo.pokemonBaseSpeed}
                    </div>
                    <div className="baseHeight">
                        Height: {currentItem?.itemInfo.pokemonHeight}
                    </div>
                    <div className="baseWeight">
                        Weight: {currentItem?.itemInfo.pokemonWeight}
                    </div>

                </div>
                <div className="types">
                    {
                        currentItem?.itemInfo.pokemonTypes.length > 1 ?
                            <>
                                <span className="text">
                                    Types
                                </span>
                                <div className="typesContainer">
                                    <PokemonCardIconImage
                                        customStyle={{
                                            width: "50px",
                                            height: "50px"
                                        }}
                                        pokemonType={currentItem?.itemInfo.pokemonTypes[0].type.name}
                                    />
                                    <PokemonCardIconImage
                                        customStyle={{
                                            width: "50px",
                                            height: "50px"
                                        }}
                                        pokemonType={currentItem?.itemInfo.pokemonTypes[1].type.name}
                                    />
                                </div>
                            </>
                            :
                            <>
                                <span className="text">
                                    Types
                                </span>
                                <div className="typesContainer">
                                    <PokemonCardIconImage
                                        customStyle={{
                                            width: "50px",
                                            height: "50px"
                                        }}
                                        pokemonType={currentItem?.itemInfo.pokemonTypes[0].type.name}
                                    />
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemInfoCard