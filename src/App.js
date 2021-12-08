import React from "react";
import {Home,} from './pages'
import {Header} from './components';
import { Route, Routes,  } from "react-router-dom";
import axios from 'axios'


 

function App() {
  const [pizzas, setPizzas] = React.useState([])

   React.useEffect(() => {
     axios.get ('http://localhost:3000/db.json').then(({data}) => {
      setPizzas(data.pizzas);
     });

  }, []);

  

  return (
   

    <div className="wrapper">
     <Header />
     <div className="content">   
     
    <Routes>
    <Route path ="/" element={<Home items={pizzas}/>}/>
    
    </Routes>


     </div>
  </div>
  
  );
}


export default App;
