import { useState } from 'react'

import Header from './components/Header'
import Products from './components/Products'
import { Route, Routes } from "react-router-dom"
import Info from './components/info'
import { motion } from 'framer-motion'

import { AnimatePresence } from 'framer-motion';

function App() {
  const [isMenuOpen, SetIsMenuOpen] = useState(false)
  const [isFollowOpen, SetIsFollowOpen] = useState(false)
  return (
    <AnimatePresence mode='wait'>
      <motion.img className='left-1/2 absolute'
      src='../assets/images/31.webp'
      initial={{opacity: 0,  }}
      animate={{opacity: 1,  }}
      onHoverStart={{opacity: 0}}
      transition={{duration: 1 ,ease: "easeInOut"}}/>
        <div className={`duration-500  ${isMenuOpen === false ? '' : 'translate-x-full'}  ${isFollowOpen === false ? '' : 'translate-y-10'}`}>
          <Header isFollowOpen={isFollowOpen} SetIsFollowOpen={SetIsFollowOpen} isMenuOpen={isMenuOpen} SetIsMenuOpen={SetIsMenuOpen}></Header>
          <Routes>
            <Route path='/' element={<Products />}/>
            <Route path='/info' element={<Info/>}></Route>
          </Routes>
        </div>
    </AnimatePresence>
    
  )
}

export default App
