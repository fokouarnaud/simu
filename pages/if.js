import React from 'react'

const IfPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-600 font-normal leading-normal flex flex-col justify-center items-center">
    <div className="flex flex-col  p-6">
      <div className="max-w-screen-lg flex flex-col items-start mb-6">
        <span className="text-2xl text-gray-800">CCNP Tshoot 2</span>
        <span className="text-xl text-gray-400">Question 1/4</span>
      </div>
      <div className="px-5 md:px-20  py-28 md:py-44 border rounded-lg bg-white border-gray-300 text-4xl text-gray-800 font-semibold  cursor-pointer mb-10">
        <p className="content-box-text">Switchport Access VLAN</p>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
        <div className="flex flex-row mb-6 md:mb-0">
          <button className="flex flex-col items-center justify-center text-gray-400 mr-16"> 
            <i className="mb-2 text-3xl fa fa-arrow-left" aria-hidden="true"></i>

            <span className="text-xl" >Previous</span>
          </button>
          <button className="flex flex-col items-center justify-center text-gray-800 "> 
            <i className="mb-2 text-3xl fa fa-arrow-right" aria-hidden="true"></i>
            <span className="text-xl" >Next</span>
          </button>
        </div>
         <div className="flex flex-row mb-6 md:mb-0">
          <button className="flex flex-col items-center justify-center text-gray-400 ml-9"> 
            <i className="mb-2 text-3xl  fa fa-pencil-square-o " aria-hidden="true"></i>

            <span className="text-xl" >Edit</span>
          </button>
          <button className="flex flex-col items-center justify-center text-gray-400 ml-9"> 
            <i className="mb-2 text-3xl  fa fa-twitter" aria-hidden="true"></i>
            <span className="text-xl" >Twitter</span>
          </button>
          <button className="flex flex-col items-center justify-center text-gray-400 ml-9"> 
            <i className="mb-2 text-3xl  fa fa-ellipsis-h" aria-hidden="true"></i>
            <span className="text-xl" >More</span>
          </button>
        </div>
      </div>
    </div>
  </main>
  )
}

export default IfPage;