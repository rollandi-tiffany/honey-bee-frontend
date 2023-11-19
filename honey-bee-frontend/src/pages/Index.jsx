import React, { useState } from 'react';
import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const [formData, setFormData] = useState({
    family_name: '',
    details: '',
    children_age: '',
    hourly_wage: '',
  });

  const sitters = useLoaderData();

  const handleFormSubmit = (event) => {
    event.preventDefault();
     //Perform actions with form data, e.g., submit to server
    console.log('Form data submitted:', formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };

  return (
    <>
      <div style={{ textAlign: 'center', backgroundColor: 'orange' }}>
        <h2 style={{ color: 'black', backgroundColor: 'orange' }}>Babysitting Schedule</h2>
        <Form action="/sitters" method="post" >
          <input
            type="text"
            name="family_name"
            placeholder="Enter Family Name"
            value={formData.family_name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="details"
            placeholder="Enter Date and Time"
            value={formData.details}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="children_age"
            placeholder="Enter Child Age"
            value={formData.children_age}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="hourly_wage"
            placeholder="Enter Hourly Wage"
            value={formData.hourly_wage}
            onChange={handleInputChange}
          />
          <button type="submit" style={{ color: 'orange' }}>Create New Babysitting Inquiry</button>
        </Form>
      </div>
      {sitters.map((post) => <Post post={post} key={post.id} />)}
    </>
  );
};

export default Index;