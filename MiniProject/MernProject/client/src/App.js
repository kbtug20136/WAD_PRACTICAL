import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./App.css"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Signup from './components/Signup';


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App