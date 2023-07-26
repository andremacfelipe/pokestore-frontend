const removeMarketListing = async (itemId,sellPrice) => {
    const USER_TOKEN =sessionStorage.getItem("USER_TOKEN")

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json", "user_token": USER_TOKEN },
    }

    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/market/remove/${itemId}`, options)
        .then(async (res) => {

            const json = await res.json()

            const data = {
                status: res.status,
                ok: res.ok,
                response: json
            }
            return data


        })

    return res
}

export default removeMarketListing
