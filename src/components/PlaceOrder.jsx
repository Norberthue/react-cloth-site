import React from 'react'
import {Link} from "react-router-dom"
import { motion } from 'framer-motion'

export default function PlaceOrder() {
  return (
    <motion.div className=' h-screen flex flex-col justify-center items-center'
    initial={{opacity: 0, y: 20 }}
    animate={{opacity: 1, y:0 }}
    exit={{opacity: 0, y: -20}}
    transition={{duration: 0.5 ,ease: "easeInOut"}}
    >
            <div>
                <h1 className=' text-2xl sm:text-6xl underline-offset-8 underline decoration-dashed'>Thank you for your purchase</h1>
            </div>
    </motion.div>
  )
}