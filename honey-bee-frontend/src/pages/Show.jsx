
import { Link, useLoaderData, Form } from "react-router-dom";
const Show = () => {
  const post = useLoaderData();


  const div = {
    textAlign: "center",
    border: "1px solid orange",
    width: "80%",
    margin: "30px auto",
    backgroundColor: "orange",
    color: "black",
    
    
    
  };

  return (
    <div style={div}>
      <h1>{post.family_name}</h1>
      <h2>{post.details}</h2>
      <h2>{post.children_age}</h2>
      <h2>{post.hourly_wage}</h2>
      <div style={{ textAlign: "center", backgroundColor:"orange" }}>
        <h2 style={{backgroundColor:"orange", color: "black"}}>Babysitting Time!</h2>
        <Form>
          <input
            type="text"
            name="family_name"
            placeholder="Enter Family Name"
            defaultValue={post.family_name}
          />
          <input
            type="text"
            name="details"
            placeholder="Enter Date and Time"
            defaultValue={post.details}
          />
          <input
          type="text"
          name="children_age"
          placeholder="Enter Child Age"
          defaultValue={post.children_age}
          />
          <input
          type="text"
          name="hourly_wage"
          placeholder="Enter Hourly Wage"
          defaultValue={post.hourly_wage}
          />
        </Form>
        <Form action={`/update/${post.id}`}method="put">
        <button>Update Schedule</button>
        </Form>
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