import "./style.css";
import React, { useEffect, useState, useContext } from "react";

import PokemonCardIconImage from "../PokemonCardIconImage/PokemonCardIconImage";

import { PokemonCardTypesColors } from "../../misc/styles/PokemonCardColors/PokemonCardColors";

import AuthContext from "../../Contexts/AuthContext/AuthContext";

import { ItemOverlay } from "../../Components/ItemOverlay/Index"
import SellListingCard from "../../Components/SellListingCard/SellListingCard"
import SellListings from "../SellListings/SellListings";
import LoadingSpin from "../LoadingSpin/LoadingSpin";

import putItemForSale from "../../services/api/putItemForSale";




const ItemInfoCard = ({ itemId }) => {

    const [currentItem, setCurrentItem] = useState(null)
    const { userData } = useContext(AuthContext)
    const [sellPrice, setSellPrice] = useState(null)
    const [saleLoading, setSaleLoading] = useState(false)
    const [saleSuccess, setSaleSuccess] = useState(null)
    const [showOverlay, setShowOverlay] = useState(false)



    useEffect(() => {
        if (itemId) {
            fetch(`${process.env.REACT_APP_API_URL}/api/item/${itemId}`)
                .then(res => res.json())
                .then(data => {
                    setCurrentItem(data)
                })
        }
    }, [itemId])

    const putItemForSaleInMarket = async (itemId, sellPrice) => {
        if (sellPrice > 0) {
            setSaleLoading(true)
            await putItemForSale(itemId, sellPrice)
                .then(async (res) => {
                    if (res.ok) {
                        setSaleSuccess(res.response.item)
                        setTimeout(() => {
                            window.location.reload()
                        }, 800)

                    }
                }).finally(() => {
                    setSaleLoading(false)
                })
        }
    }

    return (
        <div
            className="ItemInfoCard"
            style={{
                outline: `2px solid ${PokemonCardTypesColors[currentItem?.itemInfo.pokemonTypes[0].type.name]}`,
                borderRadius: "4px"
            }}
        >
            <div
                className="itemPicContainer"
                style={{
                    outline: `3px solid ${PokemonCardTypesColors[currentItem?.itemInfo.pokemonTypes[0].type.name]}`,
                    borderRadius: "4px"
                }}
            >
                <img src={currentItem?.currentItem.itemPic || ""} alt={currentItem?.currentItem.itemName} />
            </div>
            <div className="itemInfo">
                <span className="itemName">
                    {currentItem?.currentItem.itemName}
                </span>
                <div className="itemStats">
                    <div className="baseHp">
                        Hp: {currentItem?.itemInfo.pokemonBaseHp}
                    </div>
                    <div className="baseAttack">
                        Attack: {currentItem?.itemInfo.pokemonBaseAttack}
                    </div>
                    <div className="baseDefense">
                        Defense: {currentItem?.itemInfo.pokemonBaseDefense}
                    </div>
                    <div className="baseSpeed">
                        Speed: {currentItem?.itemInfo.pokemonBaseSpeed}
                    </div>
                    <div className="baseHeight">
                        Height: {currentItem?.itemInfo.pokemonHeight}
                    </div>
                    <div className="baseWeight">
                        Weight: {currentItem?.itemInfo.pokemonWeight}
                    </div>

                </div>
                <div className="types">
                    {
                        currentItem?.itemInfo.pokemonTypes.length > 1 ?
                            <>
                                <span className="text">
                                    Types
                                </span>
                                <div className="typesContainer">
                                    <PokemonCardIconImage
                                        customStyle={{
                                            width: "50px",
                                            height: "50px"
                                        }}
                                        pokemonType={currentItem?.itemInfo.pokemonTypes[0].type.name}
                                    />
                                    <PokemonCardIconImage
                                        customStyle={{
                                            width: "50px",
                                            height: "50px"
                                        }}
                                        pokemonType={currentItem?.itemInfo.pokemonTypes[1].type.name}
                                    />
                                </div>
                            </>
                            :
                            <>
                                <span className="text">
                                    Types
                                </span>
                                <div className="typesContainer">
                                    <PokemonCardIconImage
                                        customStyle={{
                                            width: "50px",
                                            height: "50px"
                                        }}
                                        pokemonType={currentItem?.itemInfo.pokemonTypes[0].type.name}
                                    />
                                </div>
                            </>
                    }
                </div>



            </div>
            {
                currentItem && userData && userData.userId === currentItem.currentItem.itemOwner ?
                    <div className="marketOptions">
                        <button onClick={() => { setShowOverlay(prev => !prev) }}>Sell</button>
                    </div>
                    : <></>

            }

            {
                currentItem && userData && showOverlay ?
                    <ItemOverlay.Root
                        showOverlay={showOverlay}
                        onOverlayClick={() => { setShowOverlay(false) }}

                    >
                        <ItemOverlay.Title
                            title={"Put an item up for sale"}
                        />


                        <SellListings
                            col1={"NAME"}
                        >
                            <SellListingCard
                                item={currentItem?.currentItem}
                            />
                        </SellListings>
                        <ItemOverlay.MarketForm>
                                <ItemOverlay.InputPrice
                                    onChange={(e) => { setSellPrice(e.target.value) }}
                                />
                                <button onClick={() => { putItemForSaleInMarket(itemId, sellPrice) }} >
                                    Ok, put it up for sale
                                </button>

                        </ItemOverlay.MarketForm>
                    </ItemOverlay.Root>

                    : <></>
            }


        </div>
    )
}

export default ItemInfoCard