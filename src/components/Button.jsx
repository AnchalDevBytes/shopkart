import React from 'react'

const Button = (props) => {
  return (
    <button className='py-3 px-8 rounded-full shadow-yellow-200 shadow-md bg-yellow-300 active:bg-yellow-500 text-slate-900 mt-5 active:shadow-white active:shadow-lg hover:shadow-yellow-500 hover:shadow-md'>{props.text}</button>
  )
}

export default Button