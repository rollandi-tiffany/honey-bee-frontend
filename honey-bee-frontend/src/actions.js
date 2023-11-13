import { redirect } from "react-router-dom";

const URL = "https://honeybee-sitters-backend.onrender.com"

export const createAction = async ({request}) => {
    const formData = await request.formData()

    const newSitter = {
        family_name: formData.get("family_name"),
        details: formData.get("details"),
        children_age: formData.get("children_age"),
        hourly_wage: formData.get("hourly_wage")
    }

    await fetch(URL + "/sitters/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSitter)
    })
    return redirect("/")
}

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const id = params.id
    const updatedSitter = {
        family_name: formData.get("family_name"),
        details: formData.get("details"),
        children_age: formData.get("children_age"),
        hourly_wage: formData.get("hourly_wage")
    }

    await fetch(URL + `/sitters/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedSitter)
    })
    return redirect(`/post/${id}`)
}

export const deleteAction = async ({params}) => {
    const id = params.id

    await fetch(URL + `/sitters/${id}/`, {
        method: "delete",
    })
    return redirect("/")
}

