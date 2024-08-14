import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import MyNavbar from '../components/navbar/MyNavbar';

const AppRouter = () => {
  return (
   
      <Router>
        <MyNavbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/über-uns" element={<About/>}/>
          <Route path="/registirieren" element={<Register/>}/>
          <Route path="/anmelden" element={<Login/>}/>
        </Routes>
      </Router>
   
  )
}

export default AppRouter