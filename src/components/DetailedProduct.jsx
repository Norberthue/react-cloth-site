import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence , useInView, useAnimation} from 'framer-motion'
import { PRODUCTS } from '../data/products'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../stores/cart'
import { main } from 'motion/react-client'

export default function DetailedProduct(props) {
    const {changeCurrency} = props
    const { slug } = useParams()
    const [detail, setDetail] = useState([])
    const [isShowMore, setIsShowMore] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [selectSize, setSelectSize] = useState('S')
    let generatedId = Math.random().toFixed(2)
    const ref = useRef(null)
    const isInView = useInView(ref ,{ once: true})
    const mainControls = useAnimation()

    useEffect(() => {
       if (isInView) {
            mainControls.start('visible')
       }
    }, [isInView])
    

    useEffect(() => {
        const findDetail = PRODUCTS.filter((product) => product.slug === slug)
        if (findDetail.length > 0) {
            setDetail(findDetail[0])
        } else {
            window.location.href = '/'
        }
    }, [slug])

    //adding items to cart with redux
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: detail.id,
            quantity: quantity,
            size: selectSize,
            generatedId: generatedId,
        }))
    }

    return (
    <motion.div ref={ref} 
    variants={{
        hidden: { opacity:0, y: 75},
        visible: { opacity:1, y: 0}
    }}
    initial='hidden'
    animate={mainControls}
    transition={{
        duration: 0.5,
        delay: 0.25
    }}
    id={detail.id} className='flex flex-col gap-10 p-10 text-3xl mt-5 sm:flex-row justify-evenly items-start '>
        <div className='flex flex-col gap-5 basis-2/4'>
            <h1 className=' list-disc'>{detail.name}</h1>
            <div className='flex gap-4 '> 
                <p className=' text-5xl font-semibold'>{changeCurrency === 'usd' ? '$' : '€'}{detail.price} {changeCurrency === 'usd' ? 'USD' : 'EUR'}</p>
            </div>
            <p className=''>Stock: In-Stock</p>
            {detail.hasSizes && <div className='flex gap-4 '>
                <h1>Sizes:</h1>
                <ul className='flex gap-4 '>
                    <li className={`cursor-pointer ${selectSize === 'S' ? 'line-through' : '' }`} onClick={() => {setSelectSize('S')}}>S</li>
                    <li className={`cursor-pointer ${selectSize === 'M' ? 'line-through' : '' }`} onClick={() => {setSelectSize('M')}}>M</li>
                    <li className={`cursor-pointer ${selectSize === 'L' ? 'line-through' : '' }`} onClick={() => {setSelectSize('L')}}>L</li>
                    <li className={`cursor-pointer ${selectSize === 'XL' ? 'line-through' : '' }`} onClick={() => {setSelectSize('XL')}}>XL</li>
                 </ul>
            </div>}
            <motion.button whileTap={{scale : 0.85}} onClick={handleAddToCart} className=' max-w-[300px] bg-black text-white p-2'>Add to Cart</motion.button>
            <p className='text-2xl mt-10 max-w-[800px]'>{detail.info}</p>
            
            <div onClick={() => setIsShowMore(!isShowMore)} className='relative flex flex-col cursor-pointer'>
                <p>{isShowMore === false ? '+ Show More' : '- Hide'}</p>
                <AnimatePresence mode='popLayout' initial={false}>
                    {isShowMore && <motion.div 
                        initial={{ opacity: 0,  y: 0}}
                        animate={{opacity: 1,  y: 15}}
                        exit={{ opacity: 0,   y: 0}}
                        transition={{ duration: 0.3,  ease: "easeInOut" }}
                        layout
                        className={`absolute  top-10 left-0  pointer-events-none`}>
                        
                        <p className='mb-2'>Measurements (Body length)</p>
                        <ul>
                            {detail.Measurements && detail.Measurements.map((measurement, index) => (
                                <li className='text-2xl' key={index}>{measurement}</li>
                            ))}
                        </ul>
                    </motion.div>}
                </AnimatePresence>
            </div>
            
            
        </div>
        <div className='basis-3/4'>
            <div 
            className='flex flex-col gap-10'>
                {detail.detailedImages && detail.detailedImages.map((image, index) => (
                    <img key={index} src={image} alt={`Product Image ${index}`}></img>
                ))}
            </div>
        </div>
        
    </motion.div>
  )
}
