import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct:{},
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({type:"SET_LOADING"})
    try {
      const response = await axios.get(url);
      const products = await response.data;
      console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };


    // api call for single product

  const singleFetchData = async (url) => {
    dispatch({type:"SET_SINGLE_LOADING"})
    try {
      const response = await axios.get(url);
      const singleProduct = await response.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload:singleProduct });
      console.log(singleProduct);
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  }


  useEffect(() => {
    fetchData(API);
  }, []);



  return (
    <AppContext.Provider value={{ ...state, singleFetchData }}>{children}</AppContext.Provider>
  );
};


export { ProductProvider, AppContext};
