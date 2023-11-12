import { redirect } from "react-router-dom";

const URL = "https://honey-bee-backend.onrender.com/"

export const createAction = async ({request}) => {
    const formData = await request.formData()

    const newUser = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    await fetch(URL + "/users/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    return redirect("/")
}

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const id = params.id
    const updatedUser = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    await fetch(URL + `/users/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser)
    })
    return redirect(`/post/${id}`)
}

export const deleteAction = async ({params}) => {
    const id = params.id

    await fetch(URL + `/users/${id}/`, {
        method: "delete",
    })
    return redirect("/")
}