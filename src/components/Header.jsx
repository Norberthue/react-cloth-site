import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"

export default function Header(props) {
  const {isMenuOpen, SetIsMenuOpen , isFollowOpen, SetIsFollowOpen} = props
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
        clearInterval(timer)
    }
  })
  return (
    <div className='h-20 p-5 sm:p-[50px] flex justify-between font-medium text-2xl'>
        <div onClick={() => SetIsMenuOpen(!isMenuOpen)} className='sm:hidden block cursor-pointer'>Menu</div>
        <div className={`absolute border-r-4 border-black  pl-5 h-screen  -left-full w-full
          bg-white 
             transform transition-transform 
            ${isMenuOpen ? 'opacity-100 pointer-events-auto': 'opacity-0 pointer-events-none'}`}
            
            style={{transition: "transform 1s ease, opacity 1 ease"}}
            >
            <ul className='flex flex-col gap-4'>
                <li onClick={() => SetIsMenuOpen(!isMenuOpen)} className='pb-3 text-3xl'>Close Menu</li>
                <Link onClick={() => SetIsMenuOpen(!isMenuOpen)} to={'/'}><li className='text-5xl font-semibold'>Products</li></Link>
                <Link onClick={() => SetIsMenuOpen(!isMenuOpen)} to={'/info'}><li className='text-5xl font-semibold'>Info</li></Link>
                <li className='text-5xl font-semibold'>Instagram</li>
                <li className='text-5xl font-semibold'>Facebook</li>
            </ul>       
        </div>
        <div>
            <p>UCG {date.getHours()}<span className='ml-1 mr-1'>:</span>{(date.getMinutes() < 10 ? '0': '') +date.getMinutes()}</p>
        </div>
        <nav className='hidden basis-2/12 md:block'>
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
        <div className={`absolute flex justify-between border-black border-b-2 pb-2 md:w-[700px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1800px]  -top-5    
          bg-white 
             transform transition-transform 
            ${isFollowOpen ? 'opacity-100 pointer-events-auto': 'opacity-0 pointer-events-none hidden'}`}
            
            style={{transition: "transform 3s ease, opacity 1 ease"}}
            >
                <div className='flex text-sm lg:text-2xl  gap-4'>
                    <p>Newsletter:</p>
                    <input className='border-b-2 border-black focus:outline-none' type='text' placeholder='Enter e-mail here'></input>
                    <butt>Subscribe</butt>
                </div>
                <div className='flex text-sm  lg:text-2xl gap-4'>
                    <div>Follow us on:</div>
                    <div>Facebook</div>
                    <div>Instagram</div>
                    <div>Twitter</div>
                </div>
                    
                
        </div>
        
    </div>
  )
}
