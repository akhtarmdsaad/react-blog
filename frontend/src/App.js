import './App.css';
import React from 'react';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import CreatePost from './components/create_post';
import Blog from './components/blog_detail';
import ChangePassword from './components/change_password';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Logout } from './components/logout';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element = {<Login />} />
          <Route path='/loading' element = {<div className='loader'></div>} />
          <Route path='/register' element = {<Register />} />
          <Route path='/logout' element = {< Logout/>} />
          <Route path='/home' element = {<Home />} />
          <Route path='/create' element = {<CreatePost />} />
          <Route path='/change_password' element = {<ChangePassword />} />
          <Route path='/details/:id' element = {<Blog />} />

          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
