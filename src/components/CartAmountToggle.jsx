import React from 'react'
import {BsPlus} from "react-icons/bs"
import {BiMinus} from "react-icons/bi"

const CartAmountToggle = ({setIncrease, setDecrease, amount}) => {
  return (
    <div className='flex gap-5 items-center justify-start mt-5 ml-4'>
        <button onClick={setDecrease}>
        <BiMinus className='text-xl'/>
        </button>
        <span>{amount}</span>
        <button onClick={setIncrease}>
        <BsPlus className='text-2xl'/>
        </button>
    </div>
  )
}

export default CartAmountToggle