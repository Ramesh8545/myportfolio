import React from 'react'
import html from '../assests/html.png'
import tailwind from '../assests/tailwind.png'
import javascript from '../assests/javascript.png'
import rlogo from '../assests/rlogo.png'
import photoshop from '../assests/photoshop.png'
import figma from '../assests/figma.png'
import illustratorlogo from '../assests/Illustratorlogo.png'
import github from '../assests/github.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
        <p className='py-4'> These are the techologies I've know</p>
    </div>
    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                  <p className='my-4 font-bold'>HTML</p>
              </div> 
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={tailwind} alt="css icon" />
                  <p className='my-4 font-bold'>TAILWIND CSS</p>
              </div> 
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={javascript} alt="js icon" />
                  <p className='my-4 font-bold'>JAVA SCRIPT</p>
              </div> 
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={rlogo} alt="react icon" />
                  <p className='my-4 font-bold'>REACT JS</p>
              </div> 
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={figma} alt="figma icon" />
                  <p className='my-4 font-bold'>FIGMA</p>
              </div> 
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={photoshop} alt="ps icon" />
                  <p className='my-4 font-bold'>ADOBE PHOTOSHOP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={illustratorlogo} alt="adl icon" />
                  <p className='my-4 font-bold'>ADOBE ILLUSTRATOR</p>
              </div> 
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={github} alt="git icon" />
                  <p className='my-4 font-bold'>GITHUB</p>
              </div> 
               
        
    </div>
</div>
    </div>
  )
}

export default Skills