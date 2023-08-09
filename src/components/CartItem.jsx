import React, { useContext } from 'react'
import FormatPrice from '../Helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import {FaTrash} from "react-icons/fa"
import { CartContext } from '../StateManagement/CartContext'

const CartItem = ({id, name, image, color, price, amount}) => {

    const {removeItem, setIncrease, setDecrease} = useContext(CartContext)

  return (
    <div className='text-slate-950 flex justify-evenly gap-10 my-10 mx-28  px-3 py-12 rounded-lg items-center bg-slate-400 '>
        <div className='flex gap-4 items-center'>
            <div>
                <img 
                src={image} alt={id}
                className="w-[130px] h-[100px] rounded-md" />
            </div>
            <div className='flex flex-col'>
                <p className='text-lg text-red-700 font-bold'>{name}</p>
                <div className='flex items-center'>
                    <p>color</p>
                    <p style={{backgroundColor: color}}
                    className={color === color ? "w-5 h-5 p-1 rounded-full ml-4 border-none outline-none opacity-100 cursor-pointer " : "w-5 h-5 p-1 rounded-full ml-4 border-none outline-none opacity-60 cursor-pointer "}
                    ></p>
                </div>
            </div>
        </div>
        <div>
            <p><FormatPrice Price={price} /></p>
        </div>
        <div>
            <p><CartAmountToggle
            amount={amount}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
            /></p>
        </div>
        <div>
            <p><FormatPrice Price={price * amount} /></p>
        </div>
        <div className='text-xl text-red-500'>
            <FaTrash
            onClick={() => removeItem(id)}/>
        </div>
    </div>
  )
}

export default CartItem