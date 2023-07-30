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
    <div className="bg-[url('https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-no-repeat bg-fixed">
      <div className='min-h-screen bg-opacity-60 backdrop-filter backdrop-blur-2xl bg-slate-00'>
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
    </div>
  )
}

export default App