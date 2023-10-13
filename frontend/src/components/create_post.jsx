import React,{useState} from 'react'
import axios from "axios";
import "./css/create_post.css"
const CreatePost = () => {
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState({})
    function handleSubmit(e)
    {
        e.preventDefault();
        setloading(true);
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const author = document.getElementById('author').value;
        const id=""+Math.random()*10000
        const data = {title, content, author,id};
        console.log(data);
        // fetch('http://localhost:8000/api/blog/', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data),
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(err))

        axios.post("http://localhost:8000/api/blog/",data,{headers: {'Content-Type': 'application/json'}})
        .then(resp=>{
            setdata(resp);
            console.log(data)
            setloading(false);
        }).catch(err=>{
            console.error(err)
            setloading(false)
        })

    }

    function handleChange(e)
    {
        e.preventDefault();
        // get the renderer div
        const renderer = document.querySelector('.renderer');
        // get the content
        const content = e.target.value;
        // render the content
        renderer.innerHTML = content;
    }

    const create_post_style = {
        display: 'flex',
        // flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        height: '100vh',
        width:'100%'
    }
    const create_post_header_style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '10vh'
    }
    const blogwritingstyle = {
        outline:'none'
    }
    const renderer_style = {
        width: '50%',
        height: '100%',
        border: '1px solid black',
        padding: '1rem'
    }

  return (
    <div className="create_post">
        <div className='create_post_main'>
            <div className="create_post_header">
                <h4>Create Post</h4>
            </div>
            {(loading ? <div className='loader'></div> : 
            <div className="create_post_body">
                <form onSubmit={handleSubmit} method="post">
                <div className="form-group">
                    {/* <label htmlFor="title">Title</label> */}
                    <input type="text" id="title" placeholder='Title' className="form-control create_post" />
                </div>
                <div className="form-group">
                    <textarea name="" id="content" className="form-control" onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <input type="text" id="author" placeholder='Author'  className="form-control create_post" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary create_post_btn">Create Post</button>
                </div>
                </form>
            </div>)}
        </div>
        <div className="separator"></div>
        <div className="renderer">
        </div>
    </div>
  )
}

export default CreatePost