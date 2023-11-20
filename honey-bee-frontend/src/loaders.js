const URL = "https://honeybee-sitters-backend.onrender.com"

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

export const usersLoader = async () => {
    try {
      const res = await fetch(URL + "/");
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const user = await res.json();
      console.log(user);
      return user;
    } catch (error) {
      console.error('Error fetching user:', error.message);
      throw error;
    }
  };

export const usersShowLoader = async ({params}) => {
    const res = await fetch(URL + `/${params.id}/`)
    const user = await res.json()
    console.log('User Data: ', user);
    return user
}