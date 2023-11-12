import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom"

const Index = (props) => {
  const users = useLoaderData()
  // For each post in the array render a Post component
  return <>
  <div style={{textAlign: "center"}}>
    <h2>Create Babysitting Details</h2>
    <Form action="text" method="post">
      <input type="text" name="subject" placeholder="write family's name"/>
      <input type="text" name="details" placeholder="write hours and wage here"/>
      <button>Create New Babysitting Inquiry</button>
    </Form>
  </div>
  {users.map((post) => <Post post={post} key={post.id} />)}
  </>
};

export default Index;;