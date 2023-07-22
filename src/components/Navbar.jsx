import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-white px-32 py-2 text-slate-600'>
        <div>
            <img className='max-h-20' src="/images/logo-no-background.png" alt="" />
        </div>
        <ul className='flex justify-center gap-16 text-xl'>
            <li><a href="">Home</a></li>
            <li><a href=""></a>About</li>
            <li><a href=""></a>Contact us</li>
            <li><a href=""></a>Cart - ()</li>
        </ul>
    </div>
  )
}

export default Navbar