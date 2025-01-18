import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PRODUCTS } from '../data/products'
export default function DetailedProduct() {
    const { slug } = useParams()
    const [detail, setDetail] = useState([])
    const [isShowMore, setIsShowMore] = useState(false)
    
    
    useEffect(() => {
        const findDetail = PRODUCTS.filter((product) => product.slug === slug)
        
        if (findDetail.length > 0) {
            setDetail(findDetail[0])
        } else {
            window.location.href = '/'
        }

    }, [slug])
    
    return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{opacity: 1 }}
    transition={{ duration: 1,  ease: "easeInOut" }}
    id={detail.id} className='flex flex-col gap-10 p-10 text-3xl mt-5 sm:flex-row justify-evenly items-start '>
        <div className='flex flex-col gap-5 basis-2/4'>
            <h1 className=' list-disc'>{detail.name}</h1>
            <div className='flex gap-4 '> 
                <p className=' text-5xl font-semibold'>${detail.price} USD</p>
            </div>
            <p className=''>Stock: In-Stock</p>
            {detail.hasSizes && <div className='flex gap-4 '>
                <h1>Sizes:</h1>
                <ul className='flex gap-4 '>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                 </ul>
            </div>}
            <motion.button whileTap={{scale : 0.85}} className=' max-w-[300px] bg-black text-white p-2'>Add to Cart</motion.button>
            <p className='text-2xl mt-10 max-w-[800px]'>{detail.info}</p>
            
            <div onClick={() => setIsShowMore(!isShowMore)} className='relative flex flex-col cursor-pointer'>
                <p>{isShowMore === false ? '+ Show More' : '- Hide'}</p>
                <AnimatePresence mode='popLayout' initial={false}>
                    {isShowMore && <motion.div 
                        initial={{ opacity: 0,  }}
                        animate={{opacity: 1,  }}
                        exit={{ opacity: 0,  }}
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
            <div className='flex flex-col gap-10'>
                {detail.detailedImages && detail.detailedImages.map((image, index) => (
                    <img key={index} src={image} alt={`Product Image ${index}`} />
                ))}
            </div>
        </div>
        
    </motion.div>
  )
}
