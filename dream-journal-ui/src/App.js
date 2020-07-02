import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navigation />
        <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/journal" component={Journal}/>
         <Route path="/contact" component={Contact}/>
        <Route component={Error}/>
       </Switch>
    </div> 
  </BrowserRouter>
  );
}

export default App;
