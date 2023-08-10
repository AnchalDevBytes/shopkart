import React from 'react'
import FormatPrice from '../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';
import ProductButton from './ProductButton';

const ListView = ({products}) => {
  return (
    <div className='flex gap-10 flex-col py-5'>
      {
        products.map((item) => {
          return (
            <NavLink
            to={`/singleProduct/${item?.id}`}
            key={item?.id}
             className='flex p-5 shadow shadow-black rounded-lg backdrop-filter backdrop-blur-xl bg-slate-900 bg-opacity-50'>
              <div className='w-[300px] rounded-md'> 
                <img src={item?.image} 
                className="h-[220px] w-full rounded-md object-cover"/>
              </div>
              <div className='w-[400px] px-12 text-white flex flex-col items-startjustify-center'>
              <h3 className="text-2xl text-white font-semibold">{item?.name}</h3>
                <div>
                <p className="mt-3 text-lg text-blue-500">
                    {" "}
                    {<FormatPrice Price={item?.price} />}
                  </p>
                  <p>{item?.description.slice(0,90)}...</p>
                </div>
                <div>
                  <ProductButton text={"Read More"}/>
                </div>
              </div>
            </NavLink>
          )
        })
      }
    </div>
  )
}

export default ListView