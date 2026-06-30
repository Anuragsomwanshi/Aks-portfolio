import React from 'react'
import { navMenu } from '../assets/assets'
import  { useState } from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

 const show = () => {
  setIsOpen(prev => !prev);
}

 const closeMenu =()=>{

  setIsOpen(false)
 }
  return (
    <>
    <div className='flex  w-full  p-4 bg-yellow-200'>
        
        

            
            <span className='font-bold text-2xl'>KARTIK</span>

            <div className={` overflow-hidden
    transition-all
    duration-300
    ease-in-out  ${isOpen?"flex flex-col":"hidden"}  w-full  justify-end  space-x-22 px-28  `} >

                {navMenu.map((item,index)=>(
                    <a className='text-sm  md:text-2xl md:border-b-2 border-transparent hover:border-black transition duration-400' key={index} onClick={closeMenu}  href={`#${item}`}>{item}</a>
                    
                    
                ))}
                



   

            </div>
        
                <button onClick={show} className='px-2 py-2 border md:hidden absolute right-10  cursor-pointer'>=</button>



    </div>
             
    </>
  )
}


export default Navbar
