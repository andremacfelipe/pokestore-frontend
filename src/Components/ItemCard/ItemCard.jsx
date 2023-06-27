import "./style.css";
import React from "react";

import PokemonCardPic from "../PokemonCardPic/PokemonCardPic";

import { PokemonCardTypesBackgroundColor, PokemonCardTypesColors } from "../../misc/styles/PokemonCardColors/PokemonCardColors";

const ItemCard = ({ itemName, itemPicSrc, pokemonType1 }) => {

    return (
        <div
            className="ItemCard"
            style={{
                boxShadow: `2px 2px 3px ${PokemonCardTypesColors[pokemonType1]}, -2px -2px 3px ${PokemonCardTypesColors[pokemonType1]} `
            }}
        >
            <PokemonCardPic
                pokemonCardPicSrc={itemPicSrc}
                pokemonType1={pokemonType1}
                PokemonCardTypesBackgroundColor={PokemonCardTypesBackgroundColor}

            />
            {
                itemName ?
                    <span className="itemName">
                        {itemName}
                    </span>
                    :
                    <>
                    </>
            }
        </div>
    )
}

export default ItemCard