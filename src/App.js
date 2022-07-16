import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Cart from './component/Cart';
import Contact from './component/Contact';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Products from './component/Products';




function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      </Routes>
      <Routes>
      <Route path='/products' element={<Products/>} />
      </Routes>
      <Routes>
      <Route path='/products/:id' element={<Product/>} />
      </Routes>
      <Routes>
      <Route path='/about' element={<About/>} />
      </Routes>
      <Routes>
      <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Routes>
      <Route path='/cart' element={<Cart/>} />
      </Routes>      
    </>
    
  );
}

export default App;
