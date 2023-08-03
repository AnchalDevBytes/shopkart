import React from 'react'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'
import FilterSection from '../components/FilterSection'


const Products = () => {

  return (
    <div className='flex justify-around'>
      <div className=''>
        <FilterSection/>
      </div>
      <div className='max-w-[calc(100vw-40%)]'>
        <div>
          <Sort/>
        </div>
        <div className='my-20'>
          <ProductList/>
        </div>
      </div>
    </div>
  )
}

export default Products