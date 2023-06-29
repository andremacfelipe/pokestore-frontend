import "./style.css";
import React from "react";

import Pokeball from "../../assets/png/Pokeball.png"

const PageLoading = () => {
    return (
        <img src={Pokeball} alt="Loading" className="PageLoading" />
    )
}

export default PageLoading