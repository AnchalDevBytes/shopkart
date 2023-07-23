import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import SingleProduct from './Pages/SingleProducts'
import Cart from './Pages/Cart'
import Error from './Pages/Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-sky-500 to-blue-800'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App