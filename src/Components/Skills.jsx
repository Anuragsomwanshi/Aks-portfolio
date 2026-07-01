import React from 'react'
import {skills} from '../assets/assets'
const Skills = () => {
  return (
    <div id='Skills' className='min-h-screen text-2xl '>
        <h1 className='text-2xl place-self-center'>My Skills</h1>


        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  '>
            {skills.map((item,index)=>(
                <div className='p-2 m-4 bg-yellow-100  flex flex-col items-center' key={index}>
                    <img
  src={item.img}
  alt={item.name}
  className="w-32 h-32 object-contain"
/>
                    <div>
                        <h1 className='text-blue-800 place-self-center '>{item.name}</h1>
                        <span className='text-sm text-justify md:text-md '>{item.discription}</span>
                    </div>
                </div>
            )) }

        </div>
        
    
        
    </div>
  )
}

export default Skills