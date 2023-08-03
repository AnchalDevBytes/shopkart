import React, { useContext } from 'react'
import { FilterContext } from '../StateManagement/FilterContext'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {

  const {filter_products, grid_view} = useContext(FilterContext)
  
  if(grid_view === true) {
    return <GridView products ={filter_products}/>
  }
  if(grid_view === false) {
    return <ListView products = {filter_products}/>
  }
}

export default ProductList