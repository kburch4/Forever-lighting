import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './Layout/NavBar';
import Home from './Layout/Home';
import Contact from './Layout/Pages/Contact';
import Footer from './Layout/Footer';
import Quote from './Layout/Pages/Quote';

function App() {
  return (
    <div className="App bg-slate-900">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Quote" element={<Quote />}/>
        </Routes>
      <Footer />  
    </div>
  );
}

export default App;
