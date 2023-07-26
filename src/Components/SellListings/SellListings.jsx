import "./style.css"
import React from "react"

const SellListings = ({ items, col1, col2, col3, col4, children }) => {
    return (
        <div className="SellListings">

            <table className="SellListingsTable">
                <thead>
                    <tr className="SellListingsHeader SellListingsTableRow">
                        <th className="SellListingsItemNameColumn">
                            {col1}
                        </th>
                        <th className="SellListingsItemColumn">
                            {col2}
                        </th>
                        <th className="SellListingsItemColumn">
                            {col3}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}




export default SellListings



