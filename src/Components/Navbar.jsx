import React from 'react'
import { navMenu } from '../assets/assets'

const Navbar = () => {
  return (
    <>
    <div className='   flex  fixed w-full  p-4 bg-yellow-200'>
        
        

            
            <span className='font-bold text-2xl'>KARTIK</span>
            <div className='hidden md:flex  w-full  justify-end  space-x-22 px-28  ' >

                {navMenu.map((item,index)=>(
                    <a className='text-xl border-b-2 border-transparent hover:border-black transition duration-400' key={index}  href={`#${item}`}>{item}</a>
                    
                ))}


   

            </div>
        
                <button className='px-2 py-2 border md:hidden absolute right-10  cursor-pointer'>=</button>



    </div>
    </>
  )
}


export default Navbar
