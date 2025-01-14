import { useState } from 'react'

import Header from './components/Header'
import Products from './components/Products'
import { Route, Routes } from "react-router-dom"
import Info from './components/info'

function App() {
  const [isMenuOpen, SetIsMenuOpen] = useState(false)
  const [isFollowOpen, SetIsFollowOpen] = useState(false)
  return (
    <div className={`transform transition-transform duration-500  ${isMenuOpen === false ? '' : 'translate-x-full'}  ${isFollowOpen === false ? '' : 'translate-y-10'}`}>
      <Header isFollowOpen={isFollowOpen} SetIsFollowOpen={SetIsFollowOpen} isMenuOpen={isMenuOpen} SetIsMenuOpen={SetIsMenuOpen}></Header>
      <Routes>
        <Route path='/' element={<Products />}/>
        <Route path='/info' element={<Info/>}></Route>
      </Routes>
    </div>
  )
}

export default App
