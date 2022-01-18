import React from "react";
import {Cart, Home,} from './pages'
import {Header} from './components';
import { Route, Routes, } from "react-router-dom";

//npm run dev - старт json-server 




function App () {  
     
  return (
    <div className="wrapper">
       <Header />
       <div className="content">   
       
      <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/cart" element={<Cart/>}/>
      
      
      </Routes>  
  
       </div>
    </div>
  )
}


export default App;


// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   };
// }
    
// export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default connect (
//   (state) => {
//     return {
//       items: state.pizzas.items,
//       filters: state.filters,
//     };
//   },
//   (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzas(items)),
//     };
//   },
// )(App);