import React from 'react'
import { motion } from 'framer-motion'
export default function info() {
    const text ='Purchases from sadboysgear.com are eligible for return within 30 days of delivery. The customer pays for the shipping back to our warehouse.'.split(' ')
    const text2 = 'We do not allow exchanges; simply return you original purchase, and place a new order.'.split(' ')
    return (
    <motion.div
    initial={{opacity: 0,  }}
    animate={{opacity: 1,  }}
    
    transition={{duration: 1 ,ease: "easeInOut"}}
    className='flex flex-col sm:flex-row justify-between   p-5 sm:p-[50px]'>
        <div className='mb-5'>
            <p className='font-semibold text-2xl'>Contact</p>
            <p className='text-2xl'>- - - - - -</p>
            <p className='text-lg'>info@sadboysgear.com</p>
        </div>
        <div className='flex-col  basis-7/12'>
            <div className='mb-10'>
                <h1 className='font-semibold text-2xl'>Return policy</h1>
                <p className='text-2xl'>- - - - - -</p>
                <div className=' text-lg '>{text.map((el,i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                        duration: 0.25,
                        delay: i / 30,
                        }}
                        className='mb-10 ' key={i}>{el}{' '}</motion.span>))}
                    {text2.map((el,i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                        duration: 0.25,
                        delay: i / 30,
                        }}
                        className='mb-10 ' key={i}>{el}{' '}</motion.span>))}
                    <span className='mb-5 line-clamp-5'>The item must be in the same condition as when you received it. We do not accept items that have been worn, altered or washed.</span>
                    Refunds will be credited to the credit card used to purchase the item, once it has arrived in our warehouse. If you require any help with your return, contact us at info@sadboysgear.com
                </div>
            </div>
            <div className='mb-10'>
                <h1 className='font-semibold text-2xl'>Shipping</h1>
                <p className='text-2xl'>- - - - - -</p>
                <p className='text-lg '><span className='mb-5 line-clamp-5'>All Sadboys Gear orders are shipped from Borås, Sweden via UPS Worldwide.</span>

                    <span className='mb-5 line-clamp-5'>Shipping rates are determined by weight, destination, and how fast you want to receive your package at point of purchase.</span>

                    <span className='mb-5 line-clamp-5'>To find out the cost of shipping for your order, add the items you want into your shopping cart and proceed to checkout until you’ve selected your shipping method. The cost of shipping will automatically update in your order total before you need to enter your payment method information.</span>

                    <span className='mb-5 line-clamp-5'>Once your order has been shipped, you will receive an email confirmation of your shipping details and tracking number.</span>

                    <span className='mb-5 line-clamp-5'>For all destinations outside of the EU, customers may face import and duty taxes. These vary from country to country and Sadboys Gear has no control over them. In the event that you need to pay import and duty taxes, you will be contacted directly by the shipping service and the order will not be released until you have paid. Please contact your local customs office for further details of charges.</span>

                    <span className='mb-5 line-clamp-5'>In the case that UPS is unable to deliver a package due to an incorrect address entered by the customer, multiple failed attempts to reach the customer by phone number (required at purchase) at point of delivery or otherwise, Sadboys Gear is not responsible for payment of return shipping costs levied by the courier.</span>

                    <span className='mb-5 line-clamp-5'>Similarly, Sadboys Gear is not responsible for the payment of re-shipping merchandise to the customer. In cases such as these, the customer is responsible for all shipping costs associated with returned packages due to failed delivery.</span>

                    <span className='mb-5 line-clamp-5'>Sadboys Gear is not responsible for unexpected shipping delays caused by circumstances such as severe weather or natural disasters. Similarly, we are not responsible for unexpected shipping delays caused by circumstances related to the courier itself, such as clearance delays. Similarly, Sadboys Gear is not responsible for theft of packages.</span>

                    <span className='mb-5 line-clamp-5'>In cases such as these, please contact your courier with any inquiries about the status of your package.</span>
                </p>
            </div>
            <div>
                <h1 className='font-semibold text-2xl'>Information</h1>
                <p className='text-2xl'>- - - - - -</p>
                <p className='text-lg'>
                    Sadboysgear.com and it's content is owned and operated by YEAR0001 AB, Krukmakargatan 36, 118 51, Stockholm, Sweden. All rights reserved.
                </p>
            </div>
            
        </div>
    </motion.div>
  )
}
