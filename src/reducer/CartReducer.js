const CartReducer = (state, action) => {

  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(product);

    //tackle existing cart product
    let existingProduct = state.cart.find(
      (currElm) => currElm.id === id + color
    );

    if (existingProduct) {
      let updateProduct = state.cart.map((currElm) => {
        if (currElm.id === id + color) {
          let newAmount = currElm.amount + amount;
          if(newAmount >= currElm.max){
            newAmount = currElm.max;
          }
          return {
            ...currElm,
            amount: newAmount,
          };
        } else {
          return currElm;
        }
      });
      return {
        ...state,
        cart: updateProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  //increment & decrement
  if(action.type === "SET_INCREASE"){
    let incrementCart = state.cart.map((currElm) =>{
        if(currElm.id === action.payload){
            let incrementAmount = currElm.amount + 1;
            if(incrementAmount >= currElm.max){
                incrementAmount = currElm.max;
            }
            return {
              ...currElm,
              amount:incrementAmount,
            }
        } else {
            return currElm;
        }
    })
    return {
        ...state,
        cart:incrementCart,
    }
  }

  if(action.type === "SET_DECREASE"){
    let decrementCart = state.cart.map((currElm) => {
        if(currElm.id === action.payload){
            let decrementAmount = currElm.amount - 1;
            if(decrementAmount <= 1){
                decrementAmount = 1;
            }
            return {
                ...currElm,
                amount:decrementAmount
            }
        } else {
            return currElm;
        }
    })
    return {
        ...state,
        cart:decrementCart,
    }
  }

  //remove item from cart
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (currItem) => currItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if(action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, currElm) => {
      let {amount} =currElm;
      initialVal = initialVal + amount;
      return initialVal;
    },0)
    return {
      ...state,
      total_item : updatedItemVal,
    }
  }

  if(action.type === "CART_TOTAL_PRICE"){
    let totalPrice = state.cart.reduce((initialVal, currElm) => {
      let {price, amount} = currElm;
      initialVal = initialVal + price * amount;
      return initialVal;
    },0)
    return {
      ...state,
      total_price:totalPrice,
    }
  }

  return state;
};

export default CartReducer;
