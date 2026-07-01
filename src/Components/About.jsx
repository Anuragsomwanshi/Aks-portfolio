import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div id='About' className='min-h-screen flex flex-col  lg:flex-row '>

        <div className=' bg-green-200 basis-full md:basis-1/2 p-4 m-4 flex flex-col items-center'>
      <h1 className='md:text-2xl p-2 m-2  lg:m-0'>About</ h1>
       <img
  className="w-full max-w-sm md:max-w-md h-auto shadow-[15px_-5px_13px_2px_rgba(0,0,0,0.3)]"
  src={assets.about}
  alt=""
/>

        </div>

        <div className='bg-orange-200 duration-400 hover:text-blue-950   basis-full md:basis-1/2 p-2 m-2'>
            <p className=' text-justify md:text-lg md:p-4 lg:text-l '>

Hello! I'm Kartik Raghunath Somwanshi, a passionate and dedicated sketch artist who believes that every piece of art tells a unique story. My journey in the world of art began with a simple love for drawing, and over the years, that passion has grown into a meaningful career and a lifelong dream.

I have completed my ATD (Art Teacher Diploma) education, which helped me build a strong foundation in artistic techniques and creative expression. Throughout my journey, I have continuously worked on improving my skills and exploring different forms of art to bring my imagination to life.

I specialize in blood painting and personal portrait sketching. Creating portraits is more than just drawing faces for me; it is about capturing emotions, memories, and personalities in a way that makes every artwork special and meaningful. 

Over the past two years,  During this time, I have had the opportunity to work on various portrait sketches and creative projects that have helped me gain valuable experience and confidence in my abilities.

One of the proudest moments of my artistic journey was when two of my portrait sketches were selected in a State-Level Art Competition, where I received certificates for my work. This achievement motivated me to work even harder and inspired me to continue pursuing excellence in my artistic career.


My goal is to become a highly successful and respected sketch artist and to make a meaningful contribution to the world of art. 

 I believe that success comes through dedication, consistency, and the courage to follow one's passion.

Thank you for visiting my portfolio and taking the time to learn about my journey. I look forward to sharing my artistic creations with you and turning beautiful ideas and precious memories into meaningful works of art.

</p>

        </div>

    </div>
  )
}

export default About