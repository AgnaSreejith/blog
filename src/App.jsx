import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import BlogForm from './BlogForm';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route path="/add" component={BlogForm} />
    </Router>
  );
};

export default App;

