import React from 'react';
import {FaTruckMoving, FaHandshake} from 'react-icons/fa';
import {MdPayments} from 'react-icons/md';
import {GiReceiveMoney} from "react-icons/gi";

const Services = () => {
  return (
    <div className='flex flex-col h-screen mx-56 mt-24 gap-10 '>
        <div className='flex justify-evenly h-[500px] bg-black rounded-3xl items-center'>
            <div className='flex flex-col gap-5 items-center justify-center h-[300px] w-60 bg-slate-600 rounded-xl px-12'>
                <span><FaTruckMoving className='hover:shadow-lg text-blue-700 text-5xl hover:text-pink-500' /></span>
                <p className='text-slate-200 text-lg font-medium text-center'>Super Fast & <br /> Free Delivery</p>
            </div>
            <div className='flex flex-col gap-10 '>
                <div className='flex flex-col gap-2 items-center justify-center h-[120px] w-60 bg-slate-400 rounded-xl px-12'>
                    <span><FaHandshake className='hover:shadow-lg text-blue-700 text-5xl hover:text-pink-500'/></span>
                    <p className='text-slate-200 text-lg font-medium text-center'>Non-Contact Delivery</p>
                </div>
                <div className='flex flex-col gap-2 h-[120px] items-center justify-center w-60 bg-slate-400 rounded-xl px-12'>
                    <span><GiReceiveMoney className='hover:shadow-lg text-blue-700 text-5xl hover:text-pink-500'/></span>
                    <p className='text-slate-200 text-lg font-medium text-center'>Money Back Gaurantee</p>
                </div>
            </div>
            <div className='h-[300px] w-60 items-center flex flex-col gap-5 justify-center bg-slate-600 rounded-xl px-12'>
                <span><MdPayments className='hover:shadow-lg text-blue-700 text-5xl hover:text-pink-500'/></span>
                <p className='text-slate-200 text-lg font-medium text-center'>Super Secure Payment Gateway</p>
            </div>
        </div>
        <div className='flex flex-col justify-center gap-10 h-[250px] bg-black rounded-3xl items-center'>
            <p className='text-2xl font-semibold text-slate-200'>INVESTED BY 1000+ COMPANIES</p>
            <ul className='flex gap-28 text-xl'>
                <li className='p-3 hover:bg-pink-500 rounded-full bg-slate-400 text-blue-700'>C1</li>
                <li className='p-3 hover:bg-pink-500 rounded-full bg-slate-400 text-blue-700'>C2</li>
                <li className='p-3 hover:bg-pink-500 rounded-full bg-slate-400 text-blue-700'>C3</li>
                <li className='p-3 hover:bg-pink-500 rounded-full bg-slate-400 text-blue-700'>C4</li>
            </ul>
        </div>
    </div>
  )
}

export default Services