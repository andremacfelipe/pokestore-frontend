import "./style.css";
import React from "react";

import InventoryListing from "../InventoryListing/InventoryListing";


const InventoryListings = ({ currentPage, setInfoCardItemId }) => {

    return (
        <section className="InventoryListings">
            {
                currentPage?.map((item, key) => {
                    return (
                        <InventoryListing
                            item={item}
                            key={key}
                            setInfoCardItemId={setInfoCardItemId}
                        />
                    )

                })
            }
        </section>
    )
}

export default InventoryListings
