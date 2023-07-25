import "./style.css"
import React, { useEffect, useState } from "react";

import SellListings from "../../Components/SellListings/SellListings";

const MarketPage = () => {

    const [sellListingsItems,setSellListingsItems] = useState([])

    useEffect(() => {
        document.title = "Market"
        fetch(`${process.env.REACT_APP_API_URL}/api/market`)
        .then(res => res.json())
        .then(data => setSellListingsItems(data))
    },[])

    return (
        <main className="MarketPage">
            <SellListings
                items={sellListingsItems}
                col1={"NAME"}
                col2={"PRICE"}
                col3={"AMOUNT"}
            />
        </main>
    )
}

export default MarketPage