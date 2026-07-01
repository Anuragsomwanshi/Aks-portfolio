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
    <div className='flex flex-col md:flex-row   w-full  p-4 bg-yellow-200'>
        
        

            
            <span className='font-bold text-2xl'>KARTIK</span>

            <div  className={`
    ${isOpen ? "flex  justify-evenly ": "hidden "}
    md:flex md:flex-row
    w-full
    justify-end
    px-4 md:px-28
      md:space-x-10
    transition-all duration-300
  `}>

                {navMenu.map((item,index)=>(
                    <a className='text-sm md:text-2xl border rounded bg-white p-1 md:border-transparent md:bg-transparent hover:border-black transition duration-400' key={index} onClick={closeMenu}  href={`#${item}`}>{item}</a>
                    
                    
                ))}
                

            </div>


   

        
                <button onClick={show} className='px-2  border md:hidden absolute right-5  cursor-pointer'>=</button>



    </div>
             
    </>
  )
}


export default Navbar
