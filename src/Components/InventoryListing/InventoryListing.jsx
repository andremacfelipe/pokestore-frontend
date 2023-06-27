import "./style.css";
import React from "react";




const InventoryListing = ({item,}) => {

    const {
        itemPic
    } = item

    return (
        <div 
            className="InventoryListing"
            
        >
            <img 
                src={itemPic || ""}
                alt=""
                
            />
        </div>
    )
}

export default InventoryListing