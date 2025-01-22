import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import { PRODUCTS } from '../data/products';
import CartItem from './CartItem';
import { loadStripe } from '@stripe/stripe-js';

export default function Checkout(props) {
    const {changeCurrency} = props
    const carts = useSelector(store => store.cart.items);//get data about items in shopping cart
    let total = 0;
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        name: '',
        last_name: '',
        email: '',
        phone_number: '',
        country: '',
        adress: '',
        city: '',
        zip_code: ''
      });

      function getTotalPrice() {
        {carts.map((item) => {
          let productId = item.productId
          let quantity = item.quantity
          let matchingProduct;
          let findDetail = PRODUCTS.filter(product => product.id === productId);
          matchingProduct = findDetail
          total += matchingProduct[0].price * quantity
          
        })}
      };
      let ttl = getTotalPrice()

      function handleInputChange(event) {
        const { name, value } = event.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
      }

      function handleSubmit(event) {
        event.preventDefault();
        if (!formState.name || !formState.email || !formState.last_name || !formState.phone_number || !formState.country 
          || !formState.adress || !formState.city || !formState.zip_code
         ) {
          alert('Please fill out all required fields');
          return;
        }else {
          navigate('/place-order');
        }}
        
        const makePayment = async () => {
          const stripe = await loadStripe('sk_test_51Qk10iP9lCzTi8xq0C8e2wwVENDWe2St8OE8ECa9BxotFfGSuCMPAfiHWmvZdZB07vXDT28cs0VwtpXbyVGa28Yu00UE0bSQ3n')
        }

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{ duration: 1,  ease: "easeInOut" }}
        className='flex flex-col xl:flex-row justify-evenly items-center xl:items-start p-10'>
            <div className='mb-5'>
                <div className='flex flex-col  border-r-2 border-dashed m-5 border-black justify-center max-w-[800px]'>
                    <h2 className='text-4xl mt-5 ml-5 underline underline-offset-4 decoration-dashed'>Billing Details</h2>
                    <form onSubmit={handleSubmit} method='get' id='myForm' className='p-5 flex flex-col justify-center items-center gap-10 '>
                        <label className='flex gap-5 items-center '>
                          <input onChange={handleInputChange} type='text' name="name" value={formState.name} className='focus:outline-none  sm:w-screen max-w-[700px] pl-2 py-2  border-slate-600 border-b-2 bg-transparent' placeholder='Name'></input>
                        </label>
                        <label className='flex gap-5 items-center'>
                          <input onChange={handleInputChange} type='text' name="last_name" value={formState.last_name}   className='focus:outline-none sm:w-screen max-w-[700px]  pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='Last Name'></input>
                        </label>
                        <label className='flex gap-5 items-center'>
                          <input onChange={handleInputChange} type='email'  name="email" value={formState.email}  className='focus:outline-none sm:w-screen max-w-[700px]  pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='E-mail'></input>
                        </label>
                        <label className='flex gap-5 items-center'>
                          <input onChange={handleInputChange} type='tel'  name="phone_number" value={formState.phone_number}  className='focus:outline-none sm:w-screen max-w-[700px]  pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='Phone Number'></input>
                        </label>
                        <label className='flex gap-5 items-center'>
                          <input onChange={handleInputChange} type='text' name="country" value={formState.country} className='focus:outline-none sm:w-screen max-w-[700px]  pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='Country'></input>
                        </label>
                        <label className='flex gap-5 items-center'>
                          <input onChange={handleInputChange} type='text' name="adress" value={formState.adress} className='focus:outline-none sm:w-screen max-w-[700px]  pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='Adress'></input>
                        </label>
                        <label className='flex gap-5 items-center'>
                          <input onChange={handleInputChange} type='text' name="city" value={formState.city} className='focus:outline-none sm:w-screen max-w-[700px]  pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='City'></input>
                        </label>
                        <label className='flex gap-5 items-center'>
                          <input onChange={handleInputChange} type='text'  name="zip_code" value={formState.zip_code} className='focus:outline-none  sm:w-screen max-w-[700px] pl-2 py-2 border-slate-600 border-b-2 bg-transparent' placeholder='ZIP Code'></input>
                        </label>
                        
                    </form>
                </div>

                <div className=' border-r-2 border-dashed m-5 border-black  max-w-[800px]'>
                    <h2 className='p-5  text-4xl underline underline-offset-4 decoration-dashed'>Delivery</h2>
                    <div className='flex justify-between items-center p-4 gap-4'>
                        <input type='radio' defaultChecked className='w-4 h-4'></input>
                        <div>
                        <p className='font-medium text-md'>Free shipping (2-4 bussiness days)</p>
                        </div>
                        <div>
                        <p className='font-semibold'>Free</p>
                        </div>
                    </div>
                </div>

                <div className=' border-r-2 border-dashed m-5 border-black max-w-[800px]'>
                    <h2 className='p-5  text-4xl underline underline-offset-4 decoration-dashed'>Payment</h2>
                    <fieldset>
                        <div className='flex justify-between items-center p-4 gap-4'>
                        <input type='radio' id='card' name="drone" value='card' className='w-4 h-4' defaultChecked></input>
                        <div>
                            <p className='font-medium text-md'>Card</p>
                        </div>
                        <div>
                            <p className='font-semibold'>Free</p>
                        </div>
                        </div>

                        <div className='flex justify-between items-center p-4 gap-4'>
                        <input type='radio' id='cash' name="drone" value='cash' className='w-4 h-4'></input>
                        <div>
                            <p className='font-medium text-md'>Cash on delivery</p>
                        </div>
                        <div>
                            <p className='font-semibold'>$ 1</p>
                        </div>
                        </div>
                    </fieldset>
                </div>
            </div>
                <div className=' border-b-2 border-dashed  m-5 border-black md:w-screen max-w-[700px] '>
                    <h2 className='p-5  text-4xl underline underline-offset-4 decoration-dashed'>Order Summary</h2>
                    <div className={`p-5 grid gap-2 `  }>
                        {carts.map((item, key) => 
                            <CartItem changeCurrency={changeCurrency} key={key} data={item}/>
                        )}
                    </div>
                    <div>
                        <h2 className='p-5 text-2xl'>Total Price: ${total.toFixed(2)}</h2>
                    </div>
                    <div className='flex flex-col items-center m-2 mb-8'>
                        <button  type='submit' form='myForm' className='group/arrow pt-2 sm:w-screen max-w-[500px] pb-2 pl-5 pr-5 font-semibold text-[13px] rounded-xl transition duration-150 ease-in-out bg-black text-white' >
                            Place Order
                            <i className="group-hover/arrow:ml-1 delay-100 duration-200  fa-solid fa-arrow-right pl-1 "></i>
                         </button>
                    </div>
                    
                </div>
        </motion.div>
    )
  
}
