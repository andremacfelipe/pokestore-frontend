import React from "react";
import PokemonCardIconImage from "../PokemonCardIconImage/PokemonCardIconImage";

const ItemTypesCard = ({currentItem}) => {
    return (
        <div className="types">
            {
                currentItem?.info.length > 1 ?
                    <>
                        <div className="typesContainer">
                            <PokemonCardIconImage
                                customStyle={{
                                    width: "50px",
                                    height: "50px"
                                }}
                                pokemonType={currentItem?.info[0].type.name}
                            />
                            <PokemonCardIconImage
                                customStyle={{
                                    width: "50px",
                                    height: "50px"
                                }}
                                pokemonType={currentItem?.info[1].type.name}
                            />
                        </div>
                    </>
                    :
                    <>
                        <div className="typesContainer">
                            <PokemonCardIconImage
                                customStyle={{
                                    width: "50px",
                                    height: "50px"
                                }}
                                pokemonType={currentItem?.info[0].type.name}
                            />
                        </div>
                    </>
            }
        </div>
    )
}

export default ItemTypesCard
