import React from "react";
import {Home,} from './pages'
import {Header} from './components';
import { Route, Routes,  } from "react-router-dom";

 

function App() {

  return (
    
    <div className="wrapper">
     <Header />
     <div className="content">   
     
    <Routes>
    <Route path ="/" element={ <Home/>}/>
    
    </Routes>


    </div>
  </div>
  
  );
}


export default App;
