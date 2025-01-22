import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { motion } from 'framer-motion'

export default function Products() {
    const [hoveredProductId, setHoveredProductId] = useState(null)
    return (
      <motion.div
      initial={{opacity: 0,  }}
      animate={{opacity: 1,  }}
      transition={{duration: 1 ,ease: "easeInOut"}}
      id={'sortiment'} className='flex justify-center items-center '>
      <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 p-5 sm:p-[50px]'>
        {PRODUCTS.map((product) => (
          <div key={product.id} className={`flex-col gap-10 duration-500 ${hoveredProductId && hoveredProductId !== product.id ? 'blur-md' : ''}`}>
            <div
              
              className={`cursor-pointer `}
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <Link to={product.slug}>
                <img className='border-[1px] border-[#00FF85] object-fill' src={product.image} alt={product.name} />
              </Link>
              
            </div>
            <div className='mt-2 font-medium text-2xl'>{product.name}</div>
          </div>
        ))}
      </div>
      </motion.div>
    )
}
