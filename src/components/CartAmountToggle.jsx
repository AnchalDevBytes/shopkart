import React from 'react'
import {BsPlus} from "react-icons/bs"
import {BiMinus} from "react-icons/bi"

const CartAmountToggle = ({setIncrease, setDecrease, amount}) => {
  return (
    <div className='flex gap-5 items-center justify-start mt-5 ml-4'>
        <button onClick={setDecrease}>
        <BiMinus className='text-4xl text-white font-bold p-1 bg-black rounded-lg'/>
        </button>
        <span className='font-extrabold text-yellow-400 text-xl'>{amount}</span>
        <button onClick={setIncrease}>
        <BsPlus className='text-4xl text-white font-bold p-1 bg-black rounded-lg'/>
        </button>
    </div>
  )
}


export default CartAmountToggle