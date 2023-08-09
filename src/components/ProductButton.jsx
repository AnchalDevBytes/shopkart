import React from 'react'

const ProductButton = (props) => {
  return (
    <button 
    className="mt-4 rounded-lg bg-slate-800 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-400 transition-all duration-300 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
        {props.text}
    </button>
  )
}

export default ProductButton
