import React from 'react'

const Button = (props) => {
  return (
    <button className='py-3 px-8 rounded-full shadow-yellow-200 shadow-lg bg-yellow-300 text-slate-900 mt-5'>{props.text}</button>
  )
}

export default Button