import "./style.css"
import React, { useEffect } from "react";

import SellListings from "../../Components/SellListings/SellListings";


const MarketPage = () => {

    useEffect(() => {
        document.title = "Market"
    },[])

    return (
        <main className="MarketPage">
            <SellListings />
        </main>
    )
}

export default MarketPage