import React, { useContext } from "react";
import { CartContext } from "../StateManagement/CartContext";
import CartItem from "../components/CartItem";
import { NavLink, useNavigate } from "react-router-dom";
import ProductButton from "../components/ProductButton";
import FormatPrice from "../Helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee,total_item } = useContext(CartContext);
  console.log(cart);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="mx-60 my-10 rounded-xl flex justify-center items-center min-h-[50vh] backdrop-filter backdrop-blur-sm  opacity-70  bg-slate-900">
        <div className="flex items-center justify-center text-white ">
          <div className="flex flex-col gap-10 justify-center items-center">
            <h2 className="text-5xl font-bold tracking-widest animate-pulse text-yellow-300">
              yo bro, your cart is empty!!
            </h2>
            <div onClick={() => navigate("/products")}>
              <ProductButton text="go to shop" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-60 my-10 pb-10 rounded-xl  min-h-screen backdrop-filter backdrop-blur-sm  opacity-70  bg-slate-900">
        <div className="flex justify-around text-white ">
          <ul className="flex justify-evenly items-center gap-40 text-lg py-10 pl-44 tracking-widest">
            <li className=" hover:text-red-500">Item</li>
            <li className=" hover:text-red-500">Price</li>
            <li className=" hover:text-red-500">Quantity</li>
            <li className=" hover:text-red-500">SubTotal</li>
            <li className=" hover:text-red-500">Remove</li>
          </ul>
        </div>
        <hr />
        <div>
          {cart.map((currElm) => (
            <CartItem key={currElm.id} {...currElm} />
          ))}
        </div>
        <hr />
        <div className="flex justify-between items-center px-40 py-16">
          <NavLink to="/products">
            <ProductButton text={"Continue Shopping"} />
          </NavLink>
          <div onClick={clearCart}>
            <ProductButton text={"Clear Cart"} />
          </div>
        </div>
        <div className="flex justify-end items-center mr-20">
          <div className="text-slate-900 w-[30%] flex justify-evenly flex-col px-8 py-12 rounded-lg  bg-slate-400 text-start gap-3 ">
            <div className="flex gap-28 text-xl ">
              <p>SubTotal :</p>
              <p className="text-red-600">
                <FormatPrice Price={total_price}/>
              </p>
            </div>
            <div className="flex gap-20 text-xl">
              <p>ShippingFee :</p>
              <p className="text-red-600">
                <FormatPrice Price={shipping_fee}/>
              </p>
            </div>
            <hr />
            <div className="flex gap-24 text-xl">
              <p>Order Total:</p>
              <p className="text-red-600">
                <FormatPrice Price={total_price + shipping_fee}/>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
