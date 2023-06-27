import "./style.css"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import InventoryListings from "../../Components/InventoryListings/InventoryListings"
import ItemInfoCard from "../../Components/ItemInfoCard/ItemInfoCard"
import ArrowRight from "../../Components/MaterialSymbolsRounded/ArrowRight"
import ArrowLeft from "../../Components/MaterialSymbolsRounded/ArrowLeft"

const InventoryPage = () => {

    const [inventoryPages, setInventoryPages] = useState([])
    const [currentPageIndex, setCurrentPageIndex] = useState(0)

    const [infoCardItemId, setInfoCardItemId] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/profiles/${id}/inventory`)
            .then(res => res.json())
            .then(res => {
                var result = [];
                for (var i = 0; i < res.length; i += 25) {
                    result.push(res.slice(i, i + 25));
                }
                return result
            }).then(res => {
                setInventoryPages(res)
                setInfoCardItemId(res[0][0]._id)

            }).catch(err =>{})


    }, [])

    const nextInventoryPage = () => {
        if (currentPageIndex < inventoryPages.length - 1) {
            setCurrentPageIndex(prev => prev + 1)
        }
    }
    const previousInventoryPage = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(prev => prev - 1)
        }
    }





    return (
        <main className="InventoryPage">
            <div className="inventoryContainer">
                <h1>Inventory</h1>
                <InventoryListings
                    currentPage={inventoryPages[currentPageIndex]}
                    setInfoCardItemId={setInfoCardItemId}
                />
                <nav className="nextAndPreviousPage">
                    <div
                        className="previousButton"
                        onClick={previousInventoryPage}
                    >
                        <ArrowLeft />
                    </div>
                    <span className="currentPageStatus">
                        {`${currentPageIndex + 1} of ${inventoryPages.length}`}
                    </span>
                    <div
                        className="nextButton"
                        onClick={nextInventoryPage}
                    >
                        <ArrowRight />
                    </div>
                </nav>
            </div>
            {
                inventoryPages[0] ? 
                <ItemInfoCard
                itemId={infoCardItemId}
                />
                :
                <></>
            }
        </main>
    )
}


export default InventoryPage