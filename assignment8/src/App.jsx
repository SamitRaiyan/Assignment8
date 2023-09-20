import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './elements/header/Header'
import BlogHolder from './elements/BlogHolder/BlogHolder'
import Footer from './elements/Footer/Footer'
function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <BlogHolder></BlogHolder>
      <Footer></Footer>
    </div>
  )
}

export default App
