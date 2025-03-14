import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Product from './pages/Product'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw]lg:px-[9vw]'>
      <ToastContainer/>
    <Navbar/>
    <SearchBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/collection" element={<Collection/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App