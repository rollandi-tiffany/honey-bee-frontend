import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>{
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Honeybee Sitters</h1>
            <br/>
            <Link to={'/login'}>Login</Link>
            <Link to={'/signup'}>Signup</Link>
        </div>
    )
}


export default Home 