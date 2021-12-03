import React from "react";
import Home from './pages/Home'
import {Header} from './components';

 

function App() {

  return (
    
    <div className="wrapper">
     <Header />
     <div className="content">   
      
    <Home />

    </div>
  </div>
  
  );
}


export default App;
