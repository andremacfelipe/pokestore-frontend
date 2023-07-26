const buyMarketItem = async (itemId,token=null) => {
    const USER_TOKEN = token ? token : sessionStorage.getItem("USER_TOKEN")

    const buyMarketItemOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "user_token": USER_TOKEN },
    }

    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/purchase/item/${itemId}`, buyMarketItemOptions)
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

export default buyMarketItem