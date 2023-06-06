import './App.css';
import React from 'react';
import Footer from './Shared/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './Shared/Navbar';
const App = () => {
  return (
    <>
      
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
};

export default App;
