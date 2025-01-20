import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem.jsx';
import { useDispatch } from 'react-redux'
import { toggleStatusTab } from '../stores/cart';
import { Link } from 'react-router-dom';


export default function CartTab() {
    const carts = useSelector(store => store.cart.items);//get data about items in shopping cart
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch()
    const handleOpenTabCart = () => { //handling cart tab to close or open
        dispatch(toggleStatusTab())
      }
    return (
        <div className={`fixed top-0 right-0 bg-white p-5 text-black shadow-2xl w-96 h-full 
        transform transition-transform duration-700
        ${statusTab === false ? 'translate-x-full':''}`}>
            <div className='flex justify-between'>
                <button className='p-10  transition duration-500 ease-in-out hover:underline hover:underline-offset-4 decoration-dashed ' onClick={handleOpenTabCart}>CLOSE</button>
                <Link to={'/checkout'}><button className='p-10 transition duration-500    hover:underline hover:underline-offset-4 decoration-dashed ' onClick={handleOpenTabCart}>CHECKOUT</button></Link>
            </div>
            <h2 className='p-5 border-black border-t-2 border-dashed text-2xl'>Shopping Cart</h2>
            <div className='p-5'>
                {carts.map((item, key) => 
                    <CartItem key={key} data={item}/>
                    
                )}
            </div>
            
        </div>
    )
}