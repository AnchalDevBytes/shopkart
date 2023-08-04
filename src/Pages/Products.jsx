import React from 'react'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'
import FilterSection from '../components/FilterSection'


const Products = () => {

  return (
    <div className='flex justify-between'>
      <div className='w-[calc(100vw-70%)]'>
        <FilterSection/>
      </div>
      <div className='w-[calc(100vw-30%)] flex flex-col items-center gap-2'>
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