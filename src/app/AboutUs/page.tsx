import React from 'react'

const page = () => {
  return (
    <div className=" min-h-screen px-2 md:px-4 lg:px-6 xl:px-64 mt-32  ">
        {/* About us  */}
        <div>
            <p className="text-4xl font-semibold ">About Pollux</p>
            <p className="text-[#a7a4a4] mt-5 text-lg font-medium">
            At Pollux, , we are dedicated to leveraging blockchain technology to build a <br/>
            sustainable future. Our ecosystem represents a paradigm shift from a for-profit <br/>
            economy to a for-benefit economy, where sustainable practices are at the forefront <br/>
            of innovation.</p>
            <button
              className="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
             text-gray-900 rounded-lg group bg-gradient-to-br from-[#8AF969] to-[#000000]
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="text-white text-xl relative px-20 md:px-10 py-2.5 text-nowrap transition-all ease-in duration-75 bg-[#181717] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Contact Us
              </span>
            </button>
        </div>
    </div>
  )
}

export default page
