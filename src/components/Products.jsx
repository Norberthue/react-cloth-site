import React from 'react'
import { useState } from 'react'
import { PRODUCTS } from '../data/products'
/**
 * Products component renders a grid of product items.
 * Each product displays an image, name, and price.
 *
 * @component
 * @example
 * return (
 *   <Products />
 * )
 */
export default function Products() {
    const [hoveredProductId, setHoveredProductId] = useState(null)
    return (
      <div className='flex justify-center items-center '>
      <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 p-5 sm:p-[50px]'>
        {PRODUCTS.map((product) => (
          <div key={product.id} className={`flex-col gap-10 duration-500 ${hoveredProductId && hoveredProductId !== product.id ? 'blur-md' : ''}`}>
            <div
              
              className={`cursor-pointer `}
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <img className='border-[1px] border-[#00FF85] object-fill' src={product.image} alt={product.name} />
              
            </div>
            <div className='mt-2 font-medium text-2xl'>{product.name}</div>
          </div>
        ))}
      </div>
      </div>
    )
}
