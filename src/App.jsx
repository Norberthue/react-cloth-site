import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'


function App() {
  const [isMenuOpen, SetIsMenuOpen] = useState(false)

  return (
    <div className={`transform transition-transform duration-500 ${isMenuOpen === false ? '' : 'translate-x-full'}`}>
      <Header isMenuOpen={isMenuOpen} SetIsMenuOpen={SetIsMenuOpen}></Header>
    </div>
  )
}

export default App
