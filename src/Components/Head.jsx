import React from 'react'
import { assets } from '../assets/assets'

const Head = () => {
  return (
    <div  id='home' className='min-h-screen flex flex-col  pt-15 md:flex-row'>

        <div className=' m-6 p-4  basis-full md:basis-1/2 flex flex-col justify-center  md:space-y-10' >
        <h1 className='text-5xl sm:text-6xl md:text-7xl  '>
            <span className='text-blue-950 '>SKETCH ARTIST</span>


        </h1>
        <span className='text-justify text-xl  p-1' >A passionate sketch artist specializing in creating realistic and creative hand-drawn portraits, illustrations, and custom artwork. Skilled sketch artist with a strong eye for detail, dedicated to creating expressive and high-quality drawings.</span>
        <div className='flex justify-evenly '>
        <button className=' p-4  m-1 bg-yellow-200 border border-transparent  hover:border-black hover:bg-transparent transition duration-500 '>My Work {'->'} </button>
        <button className=' p-4  m-1 bg-yellow-200 border border-transparent  hover:border-black hover:bg-transparent transition duration-500 '>Get In Touch {'->'}</button>

        </div>

        </div>
        <div className=' basis-full md:basis-1/2 m-5 p-4 flex justify-center'>
            <img className=' shadow-[15px_-5px_13px_2px_rgba(0,0,0,0.3)] md:w-md'  src={assets.hero} alt="" />
        </div>
    </div>
  )
}

export default Head