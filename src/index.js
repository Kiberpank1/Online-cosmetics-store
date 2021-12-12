import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Warning404 from './pages/Warning404'
import Header from './components/Header'
import { Cart, } from './pages';
import store from './redux/store'
import { Provider } from 'react-redux';







ReactDOM.render(
  <React.StrictMode>
            
      <Router>
      <Provider store={store}>

      <Routes>
      
      <Route path="/cart/*" element={<Cart/>} />
      <Route path="/head" element={<Header/>} />
      <Route path="//*" element={<App/>} />    
      <Route path="*" element={<Warning404/>} />           
      
      </Routes> 

      </Provider>
             
      </Router>
            
  </React.StrictMode>,
  document.getElementById('root')
);


