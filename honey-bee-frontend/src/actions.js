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