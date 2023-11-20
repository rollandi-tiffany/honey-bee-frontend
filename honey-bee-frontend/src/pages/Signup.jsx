import React, { useState } from 'react';
import { Form, Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
const URL = "https://honeybee-sitters-backend.onrender.com" 

const Signup = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const user = useLoaderData();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  let {id} = useParams()
  console.log(id)  
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(URL + `/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      

      const data = await response.json();

      if (data) {
        navigate('/login');
      } else {
        alert("Invalid, try again.");
      }
    }catch(error){
        alert("Registration error:" + error.message );
        console.error("Registration error:", error.message);
    }
  };
  return (
    <div className="auth">
      <h2>Signup</h2>
      <Form onSubmit={handleSignup}>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
    
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </Form>
      <br/>
      <Link to="/login" className="link-btn">Already have an account? Login here.</Link>
    </div>
  );
  };
  
  export default Signup;
  
