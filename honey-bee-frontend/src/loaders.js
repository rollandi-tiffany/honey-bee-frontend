const URL = "https://honey-bee-backend.onrender.com/"

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(URL + "/users/")
    const users = await response.json()
    return users
}

//showLoader => get a single todo for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/users/${params.id}/`)
    const user = await response.json()
    return user
}