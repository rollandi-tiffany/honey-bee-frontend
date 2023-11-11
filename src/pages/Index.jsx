import React from 'react'
import Post from "../components/Post"
import {useLoaderData} from "react-router-dom"

const Index = (props) => {
    const users = useLoaderData()
  return users.map((post)=> <Post post={post} key={post.id}/>);
  
};

export default Index;