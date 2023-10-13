import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Navigation from './navigation'
import "./css/home.css";
import Card from './card';
const Home = () => {
  const [blogList, setBlogList] = useState([]);
  // collect data from server
  async function fetchData (token)
  {
    var resp = await axios.get("http://localhost:8000/api/blog/");
    // console.log(resp)
    const data = resp.data;
    setBlogList(data);
  } 
  useEffect(() => {
    fetchData("Unknown Token")
  
    return () => {
      <></>
    }
  }, [])
  
  return (
    <>
     <Navigation />
      <div className="view scrollbar-thin">
        <div className="headers">
          <h1>Welcome User</h1>
          <a href="/create" className='btn btn-primary create_btn'>Create Blog</a>
          <div>
            <input type="text" />
            <button className='btn search_btn'>Search</button>
          </div>  
        </div>
        <div className="container-home grid">
        {blogList.map((elem)=>
            // <Card id = {elem.id} category="climate" src="images/haze.jpg" author={elem.author} title={elem.title} />
            <></>
        )}
        
      </div>
      </div>
    </>
  )
}

export default Home