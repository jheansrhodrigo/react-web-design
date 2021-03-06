import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
