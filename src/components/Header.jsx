import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"

export default function Header(props) {
  const {isMenuOpen, SetIsMenuOpen} = props
  const [date, setDate] = useState(new Date())
  const [isFollowOpen, SetIsFollowOpen] = useState(false)
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
        clearInterval(timer)
    }
  })
  return (
    <div className='h-20 p-5 sm:p-[50px] flex justify-between font-medium text-2xl'>
        <div onClick={() => SetIsMenuOpen(!isMenuOpen)} className='sm:hidden block cursor-pointer'>Menu</div>
        <div className={`absolute  pl-5  -left-full w-full
          bg-white 
             transform transition-transform 
            ${isMenuOpen ? 'opacity-100 pointer-events-auto': 'opacity-0 pointer-events-none'}`}
            
            style={{transition: "transform 1s ease, opacity 1 ease"}}
            >
            <ul className='flex flex-col gap-4'>
                <li onClick={() => SetIsMenuOpen(!isMenuOpen)} className='pb-3 text-3xl'>Close Menu</li>
                <Link><li className='text-5xl font-semibold'>Products</li></Link>
                <Link to={'/info'}><li className='text-5xl font-semibold'>Info</li></Link>
                <Link><li className='text-5xl font-semibold'>Follow</li></Link>
            </ul>       
        </div>
        <div>
            <p>UCG {date.getHours()}<span className='ml-1 mr-1'>:</span>{(date.getMinutes() < 10 ? '0': '') +date.getMinutes()}</p>
        </div>
        <nav className='hidden md:block'>
            <ul className='flex gap-4'>
                <Link to={'/'}><li className='text-2xl  cursor-pointer'>Products,</li></Link>
                <Link to={'/info'}><li className='text-2xl  cursor-pointer'>Info,</li></Link>
                <li onClick={() => SetIsFollowOpen(!isFollowOpen)} className='text-2xl  cursor-pointer'>Follow,</li>
            </ul>
        </nav>
        <div className='flex gap-4'>
            <h1 className='hidden sm:block'>EUR |</h1>
            <h1>Cart (0)</h1>
        </div>
        <div className={`absolute top-0  pl-5  
          bg-white 
             transform transition-transform 
            ${isFollowOpen ? 'opacity-100 pointer-events-auto': 'opacity-0 pointer-events-none hidden'}`}
            
            style={{transition: "transform 1s ease, opacity 1 ease"}}
            >Follow</div>
        
    </div>
  )
}
