import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

export const CartContext = createContext();

const getLocalCartData = () => {
  let LocalStorageCart = localStorage.getItem("CartStorage");
  if (LocalStorageCart === []) {
    return [];
  } else {
    return JSON.parse(LocalStorageCart);
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 5000,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, color, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, color, product } });
  };

  // increase&decrease
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };

  //remove
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // add data in localata

  useEffect(() => {
    dispatch({type:"CART_TOTAL_ITEM"})
    dispatch({type:"CART_TOTAL_PRICE"})
    localStorage.setItem("CartStorage", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
