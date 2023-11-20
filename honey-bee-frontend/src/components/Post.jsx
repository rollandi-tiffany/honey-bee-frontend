import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

//destructure the post from props
const Post = ({ post }) => {
  
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    color: "black",
    border: "2px solid orange",
    borderRadius: "10px",
    margin: "10px auto",
    width: "50%",
    backgroundColor: "orange",
   

   }
   const navigate = useNavigate();
   const handleLogout = ()=>{
    navigate('/login');
    
  };
  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.family_name}</h1>
      </Link>
      <h2>{post.details}</h2>
      <h2>{post.children_age}</h2>
      <h2>{post.hourly_wage}</h2>
      <Link onClick={handleLogout}>Logout</Link>
    </div>
  );
};

export default Post