import React from 'react'
import { work } from '../assets/assets'
import Workcard from './Workcard'
const Work = () => {
  return (
    <div id='Work' className='min-h-screen p-4 m-4 '>
        <h1 className='text-2xl  place-self-center pb-5 '>My Work</h1>



<div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 '>
    { work.map((item,index)=>(
            <Workcard key={index} item ={item} />
      
        )) }

</div>
        
    </div>
  )
}

export default Work