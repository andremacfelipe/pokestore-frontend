import "./style.css";
import React from "react";

import InventoryListing from "../InventoryListing/InventoryListing";


const InventoryListings = ({currentPage}) => {

    return (
        <section className="InventoryListings">
            {
                currentPage?.map((item,key) => {
                    return (
                        <InventoryListing
                        item={item}
                        key={key}
                    />
                    )

                })
            }
        </section>
    )
}

export default InventoryListings
