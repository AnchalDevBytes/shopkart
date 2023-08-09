import React, { useContext, useState } from 'react'
import {FaCheck} from "react-icons/fa"
import CartAmountToggle from './CartAmountToggle';
import Button from "./Button"
import { CartContext } from '../StateManagement/CartContext';

const AddToCart = ({product}) => {

    const {id, colors, stock} = product;
    const [color, setColor] = useState(colors[0])
    const [amount, setAmount] = useState(1);

   const {addToCart} = useContext(CartContext);

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
   
  return (
    <div>
        <div>
        <p className='flex items-center'>
            Colors: 
            {colors.map((curColor, index) => (
                <button
                key={index}
                style={{backgroundColor:curColor}}
                className={color === curColor ? "w-5 h-5 p-1 rounded-full ml-4 border-none outline-none opacity-100 cursor-pointer " : "w-5 h-5 p-1 rounded-full ml-4 border-none outline-none opacity-60 cursor-pointer "}
                onClick={() => setColor(curColor)}
                >
                    {color === curColor ? <FaCheck className='text-xs font-bold' /> : null}
                </button>
            ))}
        </p>
        </div>
        {/* Add to cart */}
        <CartAmountToggle
            amount = {amount}
            setDecrease = {setDecrease}
            setIncrease = {setIncrease}
        />
        <div
        onClick={() => addToCart(id, amount, color, product)}
        >
            <Button text = {"Add to Cart"}/>
        </div>
    </div>
  )
}

export default AddToCart