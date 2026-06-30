import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='border-t py-8 border-zinc-300'>
        <div className='max-w-7xl mx-auto px-5'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='  mb-6 md:mb-0'>
                    <span>KARTIK</span>
                    <p className='text-sm' >KARTIK  2026| @ All right reserved</p>

                </div>
                <div>
                    <a href="#Home" className='cursor pointer'>

                    <button className='border border-2xl  w-2 h-2 p-2  rounded-full'>^</button>
                    </a>
                    </div>
                    
                <div className='flex  justify-evenly  w-xl '>

                     
                     <a href="https://www.instagram.com/kartik_s_0_01/?hl=en" target="_blank" rel="noopener noreferrer">
                     
                  <FontAwesomeIcon icon={faInstagram} className="text-3xl text-pink-500" />
                     </a>

                     <a href="https://www.facebook.com/profile.php?id=61579441208038" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-3xl text-blue-500" />
                     
                     </a>

                     <a href="http://" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faYoutube} className="text-3xl text-red-500" />
                     </a>
                </div>

            </div>

        </div>


    </div>
  )
}

export default Footer