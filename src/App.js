import React from 'react'
import { Home } from './Components1/Home'
import { Navbar } from './Components1/Navbar'
import { Routes,Route } from 'react-router-dom'
import HotelMain from './Components1/hotel-card/HotelMain'
import { SlidersImages } from './Components1/SlidersImages'
import { ViewDealNavbar } from './Components1/ViewDealNavbar'
import Login from './Components1/Log/Login'
import Signup from './Components1/Log/Signup'
import Warning from './Components1/Warning'
import  { Footer } from './Components1/Footer'
import Accountmain from './Components1/Log/Accountmain'
import { About } from './Components1/About';

const App = () => {
  return (
  <>
  <Navbar />
  <hr style={{width:'100vw',marginLeft:'0vw'}}/>
  <Warning/>
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='main/:citylist' element={<HotelMain/>}></Route>

  <Route path='/login' element={< Login />}></Route>
  <Route path='/login/Accountmain' element={< Accountmain />}></Route>
  <Route path='/Login/accountmain' element={<Accountmain/>}></Route>
  <Route path='/Signup' element={<Signup/>}></Route>
  <Route path = "SlidersImages" element = {<SlidersImages/>}></Route>
  {/* <Route path = "ViewDealNavbar" element = {<ViewDealNavbar/>}></Route> */}
  {/* <Route path = "About" element = {About}></Route> */}
  </Routes>
  <Footer  />
  </>
  )
}

export default App