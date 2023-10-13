import React from 'react'
import "./css/register.css"
const Register = () => {
  return (
    <div className="container">
        <h1>Register</h1>
        <form action="#" method="post" encType="multipart/form-data">
            <div className="form-control">
                <input type="text" name="username" placeholder="Enter your Full name" />
                <input type="text" name="username" placeholder="Enter your Username" />
            </div>
            <div className="form-control">
            </div>
            <div className="form-control">
                <input type="password" name="password"  placeholder="Enter your Password"/>
                <input type="password" name="password"  placeholder="Re-enter your Password"/>
            </div>

            <input type="submit" value="Submit" />

        </form>
    </div>
  )
}

export default Register