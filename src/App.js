import React from "react";
import {Home, Cart} from './pages'
import {Header} from './components';
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

 

function App() {

  return (
    
    <div className="wrapper">
     <Header />
     <div className="content">   
     
      

    <Home/>
   


    </div>
  </div>
  
  );
}


export default App;
