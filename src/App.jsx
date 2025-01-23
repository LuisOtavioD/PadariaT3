import { useState } from "react"
import './Mainstyle.scss'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Main from './components/main/Main.jsx'
export default function App(){
  return(
   <>
    <Header/>
    <Main/>
    <Footer/>
   </>
     
  )
}