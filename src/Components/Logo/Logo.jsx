import React from "react";
import "./style.css"

import pokeStoreLogo from "../../assets/png/pokeStore.png"

const Logo = () => {
    return (
        <img src={pokeStoreLogo} alt="PokeStore" className="Logo" />
    )
}

export default Logo