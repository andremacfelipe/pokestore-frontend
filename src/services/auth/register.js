const register = async (data) => {

    const registerOptions = {
        method:"POST",
        headers:new Headers({"content-type":"application/json"}),
        body:JSON.stringify(data)
    }

    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/register`,registerOptions).then(async (res) => {

        const json = await res.json()

        const data = {
            status:res.status,
            ok:res.ok,
            response:json
        }
        return data


    })

    return res

}








export {register}