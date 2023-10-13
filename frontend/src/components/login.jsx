import React, { useState } from 'react';
import axios from "axios";
import "./css/login.css";
const Login = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [loader,setLoader] = useState(false)

  function update_username(e){
    setUsername(e.target.value);
  }
  function update_passsword(e){
    setPassword(e.target.value);
  }


  async function handleSubmit(e){
    e.preventDefault();
    setLoader(true)
    console.log(e.target)
    var user = {
      username:username,
      password:password
    };
    const {data} = await axios.post('http://localhost:8000/token/', user ,{
      headers: {'Content-Type': 'application/json'},withCredentials: true
    });
        
    console.log("printing data");
    
    if(data)
    {
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      window.location.href = "/home";
    }
  }

  return (
    (loader?<div className='loader'></div>:
    <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <input type="text" name="username" placeholder="Enter your Username" onChange={update_username}/>
            </div>
            
            <div className="form-control">
                <input type="password" name="password"  placeholder="Enter your Password" onChange={update_passsword} />
            </div>

            <input type="submit" value="Submit" />

        </form>
    </div>)
  )
}

export default Login;