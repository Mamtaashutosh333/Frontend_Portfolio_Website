import React from 'react';
import "./index.css";
import { Route, Routes } from 'react-router-dom';

//component imports:----
import Home from './Component/Home';
import About from './Component/About';
import Skills from './Component/Skills';
import Project from './Component/Project';
import Contact from './Component/Contact';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
