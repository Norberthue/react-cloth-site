import { useState } from 'react'

import Header from './components/Header'
import Products from './components/Products'


function App() {
  const [isMenuOpen, SetIsMenuOpen] = useState(false)

  return (
    <div className={`transform transition-transform duration-500 ${isMenuOpen === false ? '' : 'translate-x-full'}`}>
      <Header isMenuOpen={isMenuOpen} SetIsMenuOpen={SetIsMenuOpen}></Header>
      <Products></Products>
    </div>
  )
}

export default App
