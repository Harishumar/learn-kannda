import React,{useEffect, useState} from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from "./components/home"
import "./App.css";
import Navbar from "./components/navbar";
import * as M from "materialize-css/dist/js/materialize.min.js"
function App() {
  useEffect(()=>{
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
      var collapsible = document.querySelectorAll('.collapsible');
       M.Collapsible.init(collapsible);
     
  },[])

  return (
    <>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Vowels" exact component={Vowels}/>
      <Route path="/Consonents" exact component={Consonents}/>
      <Route path="/Numbers" exact component={Numbers}/>
    </Switch>
     </>
  )
}


function Consonents() {
  return (<p>Consonents</p>);
}

function Vowels() {
  return (<p>Vowels</p>);
}

function Numbers() {
  return (<p>Numbers</p>);
}
export default App;
