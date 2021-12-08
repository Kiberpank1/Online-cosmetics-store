import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Warning404 from './pages/Warning404'
import Header from './components/Header'
import { Cart, } from './pages';
import store from './redux/store'


const inc = () => {
  store.dispatch({
    type: 'counter/incremented',
  });
};


store.subscribe(()=> console.log ('Измененине произошло', store.getState()));


ReactDOM.render(
  <React.StrictMode>
      <Router>

      <button onClick={inc}>Довабивть</button>

      <Routes>

      <Route path="/cart/*" element={<Cart/>} />
      <Route path="/head" element={<Header/>} />
      <Route path="//*" element={<App/>} />    
      <Route path="*" element={<Warning404/>} />           
      
      </Routes> 


      </Router>
            
  </React.StrictMode>,
  document.getElementById('root')
);


