import React from 'react'
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <main>
        <div class="container py-4">
            <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Welcome To Blog Lyfe</h1>
                    <p class="col-md-8 fs-4">We make all kinds of blog about varius topics</p>
                    
                    <hr />
                    <p>Click to check out our blogs</p>
                    <Link class="btn btn-primary btn-lg" to="/blog">Check Blog</Link>
                </div>
            </div>
        </div>
        </main>
  )
}

export default Home