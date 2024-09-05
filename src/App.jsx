
import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './auth/Login'
import Sighup from './auth/Signup'
import ErrorPage from './pages/ErrorPage'
import Navbar from './component/Navbar'
import Footer from './component/Footer'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Sighup />}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App