import React from 'react'
import search from '../assets/icons/search.svg'

function HeroComponent() {
  return (
    <>
      <div className='bg-[#164863f4] min-h-40'>
        {/* <img src={bgimg} alt="Background-Image" className='max-h-40 w-[430px]'/> */}
        <div className="flex justify-center p-5">
            <h2 className='font-bold text-5xl md:text-7xl text-white'>Be a Blogster</h2>
        </div>
      </div>

      {/* <h1 className='text-xl font-bold'>Search</h1> */}
      <div className="md:hidden search flex justify-center gap-6 items-center mt-6 mx-4 p-4 bg-white rounded-full">
        <button><img src={search} alt="Search" className='rotate-90' /></button>
        <input className='outline-none bg-transparent' placeholder='Search resource' type="text" />
      </div>
    </>
  )
}
export default HeroComponent

