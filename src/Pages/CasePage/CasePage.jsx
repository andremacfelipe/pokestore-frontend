import "./style.css";
import React, { useContext, useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import ItemCard from "../../Components/ItemCard/ItemCard";

import AuthContext from "../../Contexts/AuthContext/AuthContext";


import openCase from "../../services/api/openCase";



const CasePage = () => {

    const navigate = useNavigate()

    const {userData,logout} = useContext(AuthContext)


    const { id } = useParams()

    const [caseInfo, setCaseInfo] = useState(null)
    const [lastSortedItem,setLastSortedItem] = useState(null)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/case/${id}`)
            .then(res => res.json())
            .then(data => setCaseInfo(data))
    }, [])
    
    const onButtonClick = async () => {
        if (!userData){
            navigate("/login")
        }else{
            await openCase(id)
                .then(res => {
                    if (!res.ok){
                        if (res.status == 401){
                            logout()
                            navigate("/login")
                        }else if(res.status == 402){
                            console.error("Insuficient credits!")
                        } 
                    }else{
                        setLastSortedItem(res.response)
                    }
                })
        }
    }


    return (
        <main className="CasePage">
            <section className="caseOpeningSection">
                <h1 className="caseName">{caseInfo?.name}</h1>
                <div className="caseImageContainer">
                    <img src={caseInfo ? `${process.env.REACT_APP_API_URL}/${caseInfo?.image}` : ""} alt="Case Image" />
                </div>
                <div className="sortedItemContainer">
                    {
                        lastSortedItem ? 
                            <ItemCard
                                itemPicSrc={lastSortedItem.match.pokemonPicSrc}
                                itemName={lastSortedItem.item.itemName}
                                pokemonType1={lastSortedItem.match.pokemonTypes[0].type.name}
                            />
                            :
                            <></>
                    }
                </div>
                <div className="buttonContainer">
                    <button
                        className="openButton"
                        onClick={onButtonClick}
                    >
                        ${caseInfo?.price}
                    </button>
                </div>
            </section>
            <section className="caseContentSection">
                {
                    caseInfo?.content.map((item,key) => {
                        return (
                            <PokemonCard
                                pokemon={item}
                                key={key}
                            />
                        )
                    })
                }
            </section>
        </main>
    )
}
export default CasePage