const URL = "https://honey-bee-backend.onrender.com/"

export const indexLoader = async () => {
    const response = await fetch(URL + "/users/")
    const users = await response.json()
    return users
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/users/${params.id}/`)
    const user = await response.json()
    return user
}