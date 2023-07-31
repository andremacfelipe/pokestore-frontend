import "./style.css"

import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Navigate, useLocation } from "react-router-dom";

import Container from "../../Components/Container/Container";
import PageLoading from "../../Components/PageLoading/PageLoading";
import ItemStatsCard from "../../Components/ItemStatsCard/ItemStatsCard";
import ItemTypesCard from "../../Components/ItemTypesCard/ItemTypesCard";
import SellListings from "../../Components/SellListings/SellListings";
import SellListingCard from "../../Components/SellListingCard/SellListingCard";

import { ItemOverlay } from "../../Components/ItemOverlay/Index";

import AuthContext from "../../Contexts/AuthContext/AuthContext";

import buyMarketItem from "../../services/api/buyMarketItem";
import removeMarketListing from "../../services/api/removeMarketListing";

import { PokemonCardTypesColors } from "../../misc/styles/PokemonCardColors/PokemonCardColors";

const MarketListingPage = () => {
    const [loading, setLoading] = useState(true)
    const [buyLoading, setBuyLoading] = useState(false)
    const [buyError, setBuyError] = useState(false)
    const [items, setItems] = useState([])
    const [purchasedItem, setPurchasedItem] = useState(null)
    const { itemName } = useParams()

    const location = useLocation()

    const [currentItem, setCurrentItem] = useState(null)


    const navigate = useNavigate()

    const { userData, updateUserData, logout } = useContext(AuthContext)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/market/item/${itemName}`)
            .then(res => res.json())
            .then(data => setItems(data))
            .finally(() => setLoading(false))
    }, [location,itemName])


    const buyAction = async (itemId) => {
        if (!userData) {
            logout()
            navigate("/login")
        } else {
            setBuyLoading(true)
            await buyMarketItem(itemId)
                .then(res => {
                    if (!res.ok) {
                        setBuyError(res.response)
                    } else {
                        setPurchasedItem(res.response.item)
                    }
                })
                .then(updateUserData)
                .finally(() => {
                    setBuyLoading(false)
                })
        }
    }
    const removeListingAction = async (itemId) => {
        if (!userData) {
            logout()
            navigate("/login")
        }else {
            await removeMarketListing(itemId)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(res.response.message)
                    } else {
                        
                    }
                }).then(updateUserData)
                .finally(() => {
                    window.location.reload()
                })

        }
    }


    return (
        <main className="MarketListingPage"
            style={{
                justifyContent: `${loading ? "center" : ""}`
            }}
        >

            {
                currentItem && <ItemOverlay.Root
                    showOverlay={!!currentItem}
                    onOverlayClick={() => setCurrentItem(null)}

                >
                    <ItemOverlay.Title title={"Buy an item"} />
                    <SellListings
                        col1={"NAME"}
                        col2={""}
                        col3={"PRICE"}
                    >
                        <SellListingCard
                            item={currentItem}
                        />
                    </SellListings>
                    <ItemOverlay.PurchaseInfo totalPrice={currentItem.market.price.toFixed(2)}>

                    </ItemOverlay.PurchaseInfo>
                    <ItemOverlay.PaymentInfo
                        currentUser={userData}
                        action={{
                            name: "Buy",
                            onClick: () => {
                                buyAction(currentItem?._id)
                            },
                            loading: buyLoading,
                            completed: purchasedItem?._id === currentItem?._id
                        }}
                    />

                </ItemOverlay.Root>
            }
            {
                !loading && items[0] ?
                    <Container>

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
                        >
                            {items?.map((item, key) => {
                                if (item.itemOwner == userData?.userId) {
                                    return (
                                        <SellListingCard
                                            item={item}
                                            key={key}
                                            action={{
                                                name: "Remove", action: () => {
                                                    userData ? removeListingAction(item._id)
                                                        :
                                                        navigate("/login")
                                                }
                                            }}
                                        />
                                    )
                                } else {
                                    return (
                                        <SellListingCard
                                            item={item}
                                            key={key}
                                            action={{
                                                name: "Buy", action: () => {
                                                    userData ? setCurrentItem(item)
                                                        :
                                                        navigate("/login")
                                                }
                                            }}
                                        />
                                    )
                                }
                            })}
                        </SellListings>

                    </Container>
                    : !loading && !items[0] ?
                        <Navigate
                            to={"/"}
                        />
                        :
                        
                            <PageLoading />
                        

            }
        </main>
    )
}


export default MarketListingPage