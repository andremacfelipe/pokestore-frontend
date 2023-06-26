import "./style.css";
import React from "react";
import { Link } from "react-router-dom";



const CaseOverviewCard = ({ id, name, price, imageSrc }) => {
    return (
        <Link to={`/store/${id}`} style={{
            textDecoration:"none",
            fontWeight:"normal",
            color:"#000000"
        }}>
            <div className="CaseOverviewCard">
                <div className="casePicContainer">
                    <img src={`${process.env.REACT_APP_API_URL}/${imageSrc}`} alt={name} />
                </div>
                <div className="caseInfoContainer">
                    <span className="caseName caseText">{name}</span>
                </div>
                <div className="casePriceContainer">
                    <span className="casePrice caseText">${price}</span>
                </div>
            </div>
        </Link>
    )
}

export default CaseOverviewCard