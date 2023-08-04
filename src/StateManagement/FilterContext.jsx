import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";


export const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters:{
        text :"",
        category:"all",
        company:"all",
    }
}

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
    };

    //update the filter values
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type: "UPDATE_FILTERS_VALUE", payload:{name, value}});
    }


    //sorting product

    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS"})
        dispatch({type:"SORTING_PRODUCTS"});
    },[products, state.sorting_value, state.filters])

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload:products});
    },[products])


    return (
        <FilterContext.Provider value={{...state, SetGridView, SetListView , Sorting, updateFilterValue}}>
            {children}
        </FilterContext.Provider>
    );
};
