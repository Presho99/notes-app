
import './index.css';
import {useState} from 'react'
import Todo from './components/Todo';
import Affirmations from './components/Affirmations';
import Cal from './components/Cal';
import Mood from './components/Mood';
import Event from './components/Event';
import Home from './components/Home';
import Palette from './components/Palette';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Fragment } from 'react';


function App() {
  
  return (

   <>
    <Home />
      <Todo />
      <Affirmations />
      <Mood />
      <Cal />
      
      <Palette/>

   </>
     


  );
}

export default App;
