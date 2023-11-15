import { useState } from 'react';
import { useLoaderData, Form } from 'react-router-dom';
import Post from '../components/Post'; 


const Index = (props) => {
  
  const sitters = useLoaderData()
  // For each post in the array render a Post component
  return <>
  <div style={{textAlign: "center", backgroundColor: "orange"}}>
    <h2 style={{color: "black", backgroundColor: "orange"}}>Babysitting Schedule</h2>
    <Form action="/sitters" method="post">
      <input type="text" name="family_name" placeholder="Enter Family Name"/>
      <input type="text" name="details" placeholder="Enter Date and Time"/>
      <input type="text" name="children_age" placeholder="Enter Child Age"/>
      <input type="text" name="hourly_wage" placeholder="Enter Hourly Wage"/>
      <button style={{color: "orange"}}>Create New Babysitting Inquiry</button>
    </Form>
  </div>
  {sitters.map((post) => <Post post={post} key={post.id} />)}
  </>
};
export default Index;
