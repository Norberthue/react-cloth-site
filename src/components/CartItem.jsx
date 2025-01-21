import React, { useState, useEffect } from 'react'
import { PRODUCTS } from '../data/products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';

export default function CartItem(props) {
    const {productId, quantity, size, generatedId} = props.data; 
    const [detail, setDetail] = useState([])
    const dispatch = useDispatch();
    
    //when value of productId change it will update
    useEffect(() => {
        const findDetail = PRODUCTS.filter(product => product.id === productId);
        if (findDetail.length > 0) {
            setDetail(findDetail[0])
        }
    }, [productId])

    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1,
            size: size,
            generatedId: generatedId,
        }))
      }

    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1,
            size: size,
            generatedId: generatedId,
        }))
    }
    return (
        <div className='flex justify-between items-center bg-white text-black p-2 border-b-2 border-slate-700 border-dashed gap-5 rounded-md'>
            <img src={detail.image} className='w-12'></img>
            <h3 className='line-clamp-4'>{detail.name}</h3>
            <p>${(detail.price * quantity).toFixed(2)}</p>
            <p className='text-center'>{detail.hasSizes ? `Size ${size}` : ''} </p>
            <div className='flex gap-2 justify-between w-20'>
                <button className='bg-gray-300 w-6 h-6 text-[#00FF85] rounded-full' onClick={handleMinusQuantity}>-</button>
                <span className=''>{quantity}</span>
                <button className='bg-gray-300 w-6 h-6 text-[#00FF85] rounded-full' onClick={handlePlusQuantity}>+</button>
              </div>
        </div>
    )
}