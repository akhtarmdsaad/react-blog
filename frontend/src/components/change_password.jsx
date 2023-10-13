import React, { useState } from 'react'
import Navigation from './navigation'

const ChangePassword = () => {
  const [values,setValues] = useState({
    current_password:'',
    new_password:'',
    re_password:''
  });

  function current_password_change(e)
  {
    setValues({...values,current_password:e.target.value})
  }
  function new_password_change(e)
  {
    setValues({...values,new_password:e.target.value})
  }
  function re_password_change(e)
  {
    //check the matching of password
    const message = document.querySelector('.message')
    if(values.new_password !== e.target.value)
    {
      message.innerHTML = "<p style='color:red'>Passwords Don't Match</p>"
    }
    else
    {
      message.innerHTML = ""
    }

    
    setValues({...values,re_password:e.target.value})
  }

  function handleSubmit(e)
  {
    e.preventDefault();
    console.log(values);
  }

  return (
    <>
      <Navigation />
      <form onSubmit={handleSubmit} style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <div className="form-group center">
            <label htmlFor="current_password">Current password </label>
            <input type="password" onChange={current_password_change}
              className="form-control" name="current_password" id="current_password" aria-describedby="helpId" placeholder="Current password" />
          </div>
          <div className="form-group center">
            <label htmlFor="new_password">New password </label>
            <input type="password" onChange={new_password_change}
              className="form-control" name="new_password" id="new_password" aria-describedby="helpId" placeholder="New password" />
          </div>
          <div className="form-group center">
            <label htmlFor="re_password">Re Enter password </label>
            <input type="password" onChange={re_password_change}
              className="form-control" name="re_password" id="re_password" aria-describedby="helpId" placeholder="Re Enter password" />
              <div className="message"></div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default ChangePassword