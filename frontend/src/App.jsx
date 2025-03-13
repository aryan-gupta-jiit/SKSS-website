import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import Collection from './pages/Collection'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw]lg:px-[9vw]'>
    <Navbar/>
    <SearchBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/collection" element={<Collection/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App