import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom';
import axios from 'axios'
const Category = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');
    const {category} = useParams();
    const capitalize = (word) =>{
        if(word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    }
    useEffect(()=>{
        setCurrentCategory(category);
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const fetchData= async ()=>{
            try{
                // console.log(`${process.env}/api/blog/featured`)
                // console.log(process.env)
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`,{category},config);
                console.log(res.data)
                setBlogs(res.data);
                console.log("Blogs:",blogs)
            }
            catch(err){
                console.error("error:",err)
            }
        }
        fetchData();
        
    },[category])
    const getCategoryBlogs = ()=>{
        let list = [];
        let result = [];
        blogs.map(blogPost=>{
            console.log('Hua hai')
            return list.push(
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success-emphasis">{blogPost.category}</strong>
                    <h3 className="mb-0">{blogPost.title}</h3>
                    <div className="mb-1 text-body-secondary">{blogPost.month} {blogPost.day}</div>
                    <p className="mb-auto">{blogPost.excerpt}</p>
                    <Link to={'/blog/'+blogPost.slug} className="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                    </Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                    <img width={200} height={250} src={process.env.REACT_APP_API_URL+blogPost.thumbnail} alt='thumbnail' />
                    </div>
                </div>
            )
        })
        
        for(let i=0;i<list.length;i+=2){
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-4'>
                        {list[i]}
                    </div>
                    <div className='col-md-4'>
                        {list[i+1]?list[i+1]:null}
                    </div>
                </div>
            )
        }
        return result;
    }
  return (
    <div className="container mt-3">
        <h3 className="display-4">{capitalize(currentCategory)} Category</h3>
        <div className="nav-scroller py-1 mb-3 border-bottom">
                <nav className="nav nav-underline justify-content-between">
                    <Link className="nav-item nav-link link-body-emphasis" to="/category/world">World</Link>
                    <Link className="nav-item nav-link link-body-emphasis" to="/category/environment">Environment</Link>
                    <Link className="nav-item nav-link link-body-emphasis" to="/category/technology">Technology</Link>
                    <Link className="nav-item nav-link link-body-emphasis" to="/category/design">Design</Link>
                    <Link className="nav-item nav-link link-body-emphasis" to="/category/culture">Culture</Link>
                    <Link className="nav-item nav-link link-body-emphasis" to="/category/business">Business</Link>
                    <Link className="nav-item nav-link link-body-emphasis" to="/category/politics">Politics</Link>
                    <Link className="nav-item nav-link link-body-emphasis" to="/category/opinion">Opinion</Link>
                    <Link className="nav-item nav-link link-body-emphasis" to="/category/science">Science</Link>
                    <Link className="nav-item nav-link link-body-emphasis" to="/category/health">Health</Link>
                    <Link className="nav-item nav-link link-body-emphasis" to="/category/style">Style</Link>
                    <Link className="nav-item nav-link link-body-emphasis" to="/category/travel">Travel</Link>
                </nav>
            </div>
        {getCategoryBlogs()}
    </div>
  )
}

export default Category