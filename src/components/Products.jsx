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
    console.log(hoveredProductId)
    return (
      <div className='flex  justify-center items-center'>
      <div className='grid grid-cols-1 self-center sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 p-5 sm:p-[50px]'>
        {PRODUCTS.map((product) => (
        <div className={`flex-col self-center duration-500 ${hoveredProductId && hoveredProductId !== product.id ? 'blur-md' : ''}`}>
        <div
          key={product.id}
          className={`cursor-pointer`}
          onMouseEnter={() => setHoveredProductId(product.id)}
          onMouseLeave={() => setHoveredProductId(null)}
        >
          <img className='border-2 border-green-300' src={product.image} alt={product.name} />
          
        </div>
        <p className='font-semibold text-2xl'>{product.name}</p>
        </div>
        ))}
        
      </div>
      </div>
    )
}
