
import { Link, useLoaderData } from "react-router-dom";
const Show = () => {
  const post = useLoaderData();


  const div = {
    textAlign: "center",
    border: "3px solid orange",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.subject}</h1>
      <h2>{post.details}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Create Babysitting Schedule</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="subject"
            placeholder="write family's name"
            defaultValue={post.subject}
          />
          <input
            type="text"
            name="details"
            placeholder="write hours and wage here"
            defaultValue={post.details}
          />
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
     