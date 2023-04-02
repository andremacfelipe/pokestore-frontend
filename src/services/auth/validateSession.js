const validateSession = async (token=null) => {
    const USER_TOKEN = token ? token : sessionStorage.getItem("USER_TOKEN")

    const validateSessionOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", "user_token": USER_TOKEN }
    }

    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/session/validate`, validateSessionOptions)
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

export { validateSession }