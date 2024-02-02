import React from 'react'

function Comment() {
  return (
    <div className='container mx-4 md:mx-[250px] mb-6 w-full'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <input
          type="text"
          name="fullName"
          // value={formData.fullName}
          // onChange={handleInputChange}
          placeholder="Your comments"
          className="h-14 w-[300px] p-2 md:w-[370px] lg:w-[450px] mt-2 bg-transparent border border-[#555555] text-[#313131] text-base"
        />
        <div className='mt-4 mb-4 flex justify-start'>
            <div className='btn bg-[#1b5a7c] flex justify-center items-center w-20 h-10 rounded-lg mt-auto'>
                <button className='font-medium text-white'>Post</button>
            </div>
        </div>
    </div>
  )
}

export default Comment