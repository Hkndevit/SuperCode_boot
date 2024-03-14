import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Nav from './components/Nav/Nav'
import Blog from './pages/Blog/Blog'


import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/Blog" element={<Blog />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
