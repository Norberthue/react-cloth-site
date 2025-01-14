import { useState } from 'react'

import Header from './components/Header'
import Products from './components/Products'
import { Route, Routes } from "react-router-dom"
import Info from './components/info'

function App() {
  const [isMenuOpen, SetIsMenuOpen] = useState(false)
  return (
    <div className={`transform transition-transform duration-500  ${isMenuOpen === false ? '' : 'translate-x-full'}`}>
      <Header isMenuOpen={isMenuOpen} SetIsMenuOpen={SetIsMenuOpen}></Header>
      <Routes>
        <Route path='/' element={<Products />}/>
        <Route path='/info' element={<Info/>}></Route>
      </Routes>
      
      
    </div>
  )
}

export default App
