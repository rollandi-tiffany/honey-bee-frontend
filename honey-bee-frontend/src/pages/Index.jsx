import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom"

const Index = (props) => {
  const sitters = useLoaderData()
  // For each post in the array render a Post component
  return <>
  <div style={{textAlign: "center", backgroundColor: "yellow"}}>
    <h2 style={{color: "orange", backgroundColor: "yellow"}}>Babysitting Schedule</h2>
    <Form action="sitters" method="post">
      <input type="text" name="subject" placeholder="Enter Family Name"/>
      <input type="text" name="details" placeholder="Enter Date and Hours"/>
      <button style={{color: "orange"}}>Create New Babysitting Inquiry</button>
    </Form>
  </div>
  {sitters.map((post) => <Post post={post} key={post.id} />)}
  </>
};

export default Index;;