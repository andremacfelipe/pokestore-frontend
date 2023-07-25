import "./style.css"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Container from "../../Components/Container/Container";
import SellListings from "../../Components/SellListings/SellListings";
import SellListingCard from "../../Components/SellListingCard/SellListingCard";

const MarketPage = () => {

    const [sellListingsItems, setSellListingsItems] = useState([])

    useEffect(() => {
        document.title = "Market"
        fetch(`${process.env.REACT_APP_API_URL}/api/market`)
            .then(res => res.json())
            .then(data => setSellListingsItems(data))
    }, [])

    return (
        <main className="MarketPage">
            <Container>
                <SellListings
                    items={sellListingsItems}
                    col1={"NAME"}
                    col2={"AMOUNT"}
                    col3={"PRICE"}
                >
                    {sellListingsItems?.map((item, key) => {
                        return (
                                 <SellListingCard
                                    item={item}
                                    key={key}
                                    navigateTo={`/item/${item.name}`}
                                />
                        )
                    })}
                </SellListings>
            </Container>
        </main>
    )
}

export default MarketPage