import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";


const initialState = {
    filter_products:[],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
}

export const FilterContext = createContext();

export const FilterContextProvider = ({children}) => {

    const {products} = useContext(AppContext);

    const [state, dispatch] = useReducer(reducer, initialState);

    // set grid view

    const SetGridView = () => {
        return dispatch({type: "SET_GRIDVIEW"});
    }

    const SetListView = () => {
        return dispatch({type: "SET_LISTVIEW"});
    }

    const Sorting = (event) => {
        let userValue = event.target.value
        dispatch({type:"GET_SORT_VALUE", payload:userValue} )
    }

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload:products});
    },[products])

    //sorting product
    useEffect(() => {
        dispatch({type:"SORTING_PRODUCTS"});
    },[state.sorting_value])

    return (
        <FilterContext.Provider value={{...state, SetGridView, SetListView , Sorting}}>
            {children}
        </FilterContext.Provider>
    );
};
