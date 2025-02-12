import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { toggleStatusTab } from '../stores/cart';

export default function Header(props) {
  const {isMenuOpen, setIsMenuOpen , isFollowOpen, setIsFollowOpen, changeCurrency, currencyChanger, setPopUp, popUp} = props
  const [date, setDate] = useState(new Date())
  const [whichPage, setWhichPage] = useState('/')
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch()
  const [currencyOpen, setCurrencyOpen] = useState(false)
   const [formState, setFormState] = useState({
    email: '',
   });

  function handlePage(page) {
    return () => {setWhichPage(page)}
  }

  function handleCurrencyOpen() {
    setCurrencyOpen(!currencyOpen)
  }

  //time
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
        clearInterval(timer)
    }
  })

   //total count of items
   useEffect(() => {
      let total = 0;
      carts.forEach(item => total += item.quantity);
      
      setTotalQuantity(total)
    }, [carts])

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab())
  }

  //pop up for newsletter
  function handleSubmit(event) {
    event.preventDefault();
    if (!formState.email) {
      alert('Please fill out all required fields');
      return;
    }else {
      setPopUp(true)
    }}

    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormState(prevState => ({ ...prevState, [name]: value }));
    }

   
   
     useEffect(() => {
       if(popUp) {
         setTimeout(() => {
          setPopUp(false)
          setFormState({email: ''})
        }, 2000)
       }
     }, [popUp])


  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1 ,ease: "easeInOut"}}
    id='header' className='h-20 p-5 sm:p-[50px] flex justify-between font-medium text-2xl'>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='sm:hidden block cursor-pointer'>Menu</div>
        <div className={`absolute border-r-4 border-black  pl-5 h-screen  -left-full w-full
          bg-white 
             transform transition-transform 
            ${isMenuOpen ? 'opacity-100 pointer-events-auto': 'opacity-0 pointer-events-none'}`}
            
            style={{transition: "transform 1s ease, opacity 1 ease"}}
            >
            <ul className='flex flex-col gap-4'>
                <li onClick={() => setIsMenuOpen(!isMenuOpen)} className='pb-3 text-3xl'>Close Menu</li>
                <Link onClick={() => setIsMenuOpen(!isMenuOpen)}  to={'/'}><li className='text-5xl font-semibold'>Products</li></Link>
                <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to={'/info'}><li className='text-5xl font-semibold'>Info</li></Link>
                <li className='text-5xl font-semibold'>Instagram</li>
                <li className='text-5xl font-semibold'>Facebook</li>
            </ul>       
        </div>
        <div className='w-28'>
            <p>UCG {date.getHours()}<span className='ml-1 mr-1'>:</span>{(date.getMinutes() < 10 ? '0': '') +date.getMinutes()}</p>
        </div>
        <nav className='hidden basis-2/12 md:block'>
            <ul className='flex gap-4 items-center text-center'>
                <Link to={'/'} onClick={handlePage('/')} ><li className={`text-2xl  cursor-pointer ${whichPage === '/' ? 'underline underline-offset-4 decoration-black duration-500 ': '' }`}>Products,</li></Link>
                <Link to={'/info'}  onClick={handlePage('info')} ><li className={`text-2xl list-inside duration-500  cursor-pointer ${whichPage === 'info' ? 'underline underline-offset-4 decoration-black duration-200 ': '' }`}>Info,</li></Link>
                <li onClick={() => setIsFollowOpen(!isFollowOpen)} className='text-2xl  cursor-pointer'>Follow,</li>
            </ul>
        </nav>
        <div className='flex gap-4'>
            <div onClick={handleCurrencyOpen} className='hidden sm:block relative cursor-pointer'>
              <h1 className='w-14'>{changeCurrency === 'usd' ? 'USD' : 'EUR'} |</h1>
              <AnimatePresence mode='popLayout' >
              {currencyOpen &&<motion.div
              initial={{ opacity: 0,  y: 0}}
              animate={{opacity: 1,  y: 15}}
              exit={{ opacity: 0,   y: 0}}
              transition={{ duration: 0.3,  }}
              layout
              className={`absolute top-6 left-0 `}>
                 <ul className='flex flex-col gap-2'>
                    <li onClick={currencyChanger('usd')}>USD</li>
                    <li onClick={currencyChanger('eur')}>EUR</li>
                  </ul>
              </motion.div>}
              </AnimatePresence>
            </div>
            <h1 className='cursor-pointer w-20 lg:w-28' onClick={handleOpenTabCart}>Cart ({totalQuantity})</h1>
        </div>
        <div
        
        className={`absolute left-1/2 -translate-x-1/2 opacity-0 hidden sm:flex justify-between border-black border-b-2 pb-2 md:w-[700px] lg:w-[900px] xl:w-[1330px] 2xl:w-[1800px]      
          bg-white 
            ${isFollowOpen ? 'opacity-100 -top-5 pointer-events-auto': 'opacity-0 -top-10 pointer-events-none '} duration-500 ease-in-out`}
            >
                <div className='flex text-sm lg:text-2xl  gap-4'>
                    <p>Newsletter:</p>
                    <form onSubmit={handleSubmit} className='flex text-sm lg:text-2xl  gap-4'>
                      <input onChange={handleInputChange} type='email' name="email" value={formState.email} className='border-b-2 border-black focus:outline-none' placeholder='Enter e-mail here'></input>
                      <button type='submit'>Subscribe</button>
                    </form>
                    
                </div>
                <div className='flex text-sm  lg:text-2xl gap-4'>
                    <div>Follow us on:</div>
                    <div className='cursor-pointer'>Facebook</div>
                    <div className='cursor-pointer'>Instagram</div>
                    <div className='cursor-pointer'>Twitter</div>
                </div>
        </div>
        
    </motion.div>
    
  )
}
