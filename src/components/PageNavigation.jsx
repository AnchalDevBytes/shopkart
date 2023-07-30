import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <div className='h-20 flex justify-start items-center text-white text-2xl pl-4'>
        <NavLink to="/">Home</NavLink> /{title}
    </div>
  )
}

export default PageNavigation