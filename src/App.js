import React from "react";
import {Home,} from './pages'
import {Header} from './components';
import { Route, Routes,  } from "react-router-dom";


 

function App() {
  const [pizzas, setPizzas] = React.useState([])

   React.useEffect(() => {
     fetch('http://localhost:3000/db.json')
     .then((resp) => resp.json())
     .then((json) => {
       setPizzas(json.pizzas);
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
