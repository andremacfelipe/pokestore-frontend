const register = async (data) => {

    const registerOptions = {
        method:"POST",
        headers:new Headers({"content-type":"application/json"}),
        body:JSON.stringify(data)
    }

    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/register`,registerOptions)

    if (!res.ok) throw Error("Email already in use")

    const userData = res.json()

    return userData

}








export {register}