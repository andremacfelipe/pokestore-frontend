import React from "react";

const ItemStatsCard = ({currentItem}) => {
    return (
        <div className="itemStats">
            <div className="baseHp">
                Hp: {currentItem?.pokemonBaseHp}
            </div>
            <div className="baseAttack">
                Attack: {currentItem?.pokemonBaseAttack}
            </div>
            <div className="baseDefense">
                Defense: {currentItem?.pokemonBaseDefense}
            </div>
            <div className="baseSpeed">
                Speed: {currentItem?.pokemonBaseSpeed}
            </div>
            <div className="baseHeight">
                Height: {currentItem?.pokemonHeight}
            </div>
            <div className="baseWeight">
                Weight: {currentItem?.pokemonWeight}
            </div>

        </div>
    )
}

export default ItemStatsCard