import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Header } from './component/header'
import { Cart } from './component/cart/cart'
import { Route, Routes } from 'react-router-dom'
import { Address } from './component/address/address'
import { SignUp } from './component/login/signup'
import {Logo} from "./component/navbar/navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Logo/>
    
      
      <Header/>
      
      
      
    </div>
  )
}

export default App
