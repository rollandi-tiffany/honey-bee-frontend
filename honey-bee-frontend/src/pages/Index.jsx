import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"

const Index = (props) => {
  const todos = useLoaderData()
  // For each post in the array render a Post component
  return todos.map((post) => <Post post={post} key={post.id} />);
};

export default Index;;