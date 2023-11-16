import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Layout from './hocs/layout';
import Home from './components/Home';
import Blog from './components/Blog';
import Category from './components/Category';
import BlogDetail from './components/BlogDetail';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/blog' Component={Blog} />
          <Route exact path='/category/:category' Component={Category} />
          <Route exact path='/blog/:slug' Component={BlogDetail} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;