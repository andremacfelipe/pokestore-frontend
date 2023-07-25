import "./style.css"

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PageLoading from "../../Components/PageLoading/PageLoading";
import ItemStatsCard from "../../Components/ItemStatsCard/ItemStatsCard";
import ItemTypesCard from "../../Components/ItemTypesCard/ItemTypesCard";
import SellListings from "../../Components/SellListings/SellListings";

import { PokemonCardTypesColors } from "../../misc/styles/PokemonCardColors/PokemonCardColors";

const MarketListingPage = () => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const { itemName } = useParams()
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/market/item/${itemName}`)
            .then(res => res.json())
            .then(data => setItems(data))
            .finally(() => setLoading(false))
    }, [])


    return (
        <main className="MarketListingPage"
            style={{
                justifyContent: `${loading ? "center" : ""}`
            }}
        >
            {
                loading ?
                    <div className="container">
                        <PageLoading />
                    </div>

                    :
                    <>
                        <section className="MarketListingItemOverview"
                            style={{
                                boxShadow: `2px 2px 5px ${PokemonCardTypesColors[items[0]?.info[0]?.type?.name]}, -2px -2px 5px ${PokemonCardTypesColors[items[0].info[0]?.type?.name]} `
                            }}
                        >
                            <div className="ItemOverviewPic"
                                style={{
                                    outline: `2px solid ${PokemonCardTypesColors[items[0]?.info[0]?.type?.name]}`
                                }}
                            >
                                <img src={items[0]?.itemPic} alt="" />
                            </div>
                            <div className="descriptionContainer">
                                <h1>{items[0]?.itemName}</h1>
                                <ItemTypesCard
                                    currentItem={items[0]}
                                />

                                <div className="itemStatsContainer">
                                    <ItemStatsCard
                                        currentItem={items[0]}
                                    />
                                </div>
                            </div>



                        </section>

                        <SellListings
                            items={items}
                            col1={"NAME"}
                            col2={""}
                            col3={"PRICE"}
                        />
                    </>
            }
        </main>
    )
}


export default MarketListingPage