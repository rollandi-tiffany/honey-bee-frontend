
import { Link, useLoaderData, Form, useParams } from "react-router-dom";
import { useState } from "react";
const URL = "https://honeybee-sitters-backend.onrender.com"

const Show = () => {
const data = useLoaderData();
const [post, setPost] = useState(data)
const handleChange = (e)=>{
  setPost(p=>({...p, [e.target.name]: e.target.value}))
}
  const div = {
    textAlign: "center",
    border: "1px solid orange",
    width: "80%",
    margin: "30px auto",
    backgroundColor: "orange",
    color: "black",
    
    
    
  };
let {id} = useParams()
console.log(id)  
const handleSubmit = async(e) =>{
  e.preventDefault()
  const updatedSitter = {
    family_name: post["family_name"],
    details: post["details"],
    children_age: post["children_age"],
    hourly_wage: post["hourly_wage"]
}

await fetch(URL + `/sitters/${id}/`, {
    method: "put",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedSitter)
})
setPost(p=>({...p, ...updatedSitter}))
}
  return (
    <div style={div}>
      <h1>{post.family_name}</h1>
      <h2>{post.details}</h2>
      <h2>{post.children_age}</h2>
      <h2>{post.hourly_wage}</h2>
      <div style={{ textAlign: "center", backgroundColor:"orange" }}>
        <h2 style={{backgroundColor:"orange", color: "black"}}>Babysitting Time!</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange}
            type="text"
            name="family_name"
            placeholder="Enter Family Name"
            defaultValue={post.family_name}
          />
          <input onChange={handleChange}
            type="text"
            name="details"
            placeholder="Enter Date and Time"
            defaultValue={post.details}
          />
          <input onChange={handleChange}
          type="text"
          name="children_age"
          placeholder="Enter Child Age"
          defaultValue={post.children_age}
          />
          <input onChange={handleChange}
          type="text"
          name="hourly_wage"
          placeholder="Enter Hourly Wage"
          defaultValue={post.hourly_wage}
          />
        <button type="submit">Update Schedule</button>
        </form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete Babysitting Inquiry</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show