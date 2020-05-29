import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home'; 
import Category from './component/Category/Category'; 

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
          <Route exact={true} path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/category" component={Category} /> 
      </div>
    </Router>
  );
}

export default App;
