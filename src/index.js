import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home'



ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Routes>
      <Route path="/pages" element={<Home/>} />
      <Route path="/" element={<App/>} />
               
      </Routes>  
      </Router>
            
  </React.StrictMode>,
  document.getElementById('root')
);


