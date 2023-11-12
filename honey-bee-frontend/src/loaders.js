const URL = "https://honey-bee-backend.onrender.com/"

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(URL + "/sitters/")
    const sitters = await response.json()
    return sitters
}

//showLoader => get a single todo for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/sitters/${params.id}/`)
    const sitter = await response.json()
    return sitter
}