import React, { useState } from 'react'
import {FaCheck} from "react-icons/fa"
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import Button from "./Button"

const AddToCart = ({product}) => {

    const {id, colors, stock} = product;
    const [color, setColor] = useState(colors[0])
    const [amount, setAmount] = useState(1);

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
   
  return (
    <div>
        <div>
        <p>
            Colors: 
            {colors.map((curColor, index) => (
                <button
                key={index}
                style={{backgroundColor:curColor}}
                className="w-4 h-4 rounded-full ml-4 border-none outline-none opacity-50 cursor-pointer active:opacity-80 hover:opacity-80"
                onClick={() => setColor(curColor)}
                >
                    {color === curColor ? <FaCheck className='text-sm font-bold' /> : null}
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
        <NavLink to="/cart">
            <Button text = {"Add to Cart"}/>
        </NavLink>
    </div>
  )
}

export default AddToCart