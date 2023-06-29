import "./style.css";
import React, { useEffect, useState } from "react";

import CaseOverviewCard from "../../Components/CaseOverviewCard/CaseOverviewCard";

const StorePage = () => {

    const [availableCases, setAvailableCases] = useState(null)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/case`)
        .then(res => res.json())
        .then(data => setAvailableCases(data))

        document.title = "Store"
    },[])

    return (
        <main className="StorePage">
            <section className="caseSection">
                {
                    availableCases?.map((data,key) => {
                        return (
                            <CaseOverviewCard
                                id={data.id}
                                name={data.name}
                                price={data.price}
                                imageSrc={data.image}
                                key={key}
                            />
                        )
                    })
                }
            </section>
        </main>
    )
}

export default StorePage