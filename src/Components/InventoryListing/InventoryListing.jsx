import "./style.css";
import React from "react";



const InventoryListing = ({ item, setInfoCardItemId }) => {

    const {
        itemPic,
    } = item
    const itemId = item._id

    return (
        <div
            className="InventoryListing"
            id={itemId}
            onClick={() => { setInfoCardItemId(itemId) }}

        >
            <img
                src={itemPic || ""}
                alt=""

            />
        </div>
    )
}

export default InventoryListing