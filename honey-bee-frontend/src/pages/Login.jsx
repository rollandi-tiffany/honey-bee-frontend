import { useState } from "react";
import { Form, Link, useLoaderData, useNavigate } from "react-router-dom";

const URL = "https://honeybee-sitters-backend.onrender.com"
const Login = (props) =>{
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

  const user = useLoaderData();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
        const response = await fetch(URL + `/sitters`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            
        });
        console.log(formData)
        const data =await response.json();
        if(data.message === "Logged in successfully."){
            const formUser = formData.username;
            const foundUser = user.find((e) => e.username === formUser);
            //console.log(data.message)
            localStorage.setItem("id", foundUser._id);
            navigate('/',{ state: { user: foundUser } });
        }else{
            alert("Invalid, try again.");
            setFormData({
                ...formData,
                password: ''
                
            })
            
        }
    }catch(error){
        console.log(error);
    }
  }
  return(
    <div className="auth">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <input type="text" name="username" placeholder="Enter Username" value={formData.username} onChange={handleChange}
            />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}
            />
            <button type="submit">Login</button>

        </form>
        <Link to="/signup">Don't have an account? Click here to Signup. </Link>

    </div>
  )
}

export default Login