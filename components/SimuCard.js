import React from 'react'
import BlogCard from './BlogCard'
import SidePanel from './SidePanel'

const SimuCard = () => {
    return (
        <div className="p-5">
            <div>
                <div className=" flex flex-col items-start justify-start space-y-1">
                    <h1 className="text-2xl font-extrabold">Structure alternative</h1>
                    <p className="text-gray-600 font-medium">
                        An intense way to learn about the process and practice your designs skills —
                        My 1st hackathon Hackathons have been on my mind
                        since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...
                    </p>
                    <div className="w-full grid gap-10 xl:grid-cols-3">
                        <div className="col-span-2">
                            <div className="py-8">
                                <h4 className="text-sm text-gray-400 pb-3">code</h4>
                                <div className=" rounded-sm border border-gray-300 p-3 "> code highlight</div>
                                <div className="flex flex-row my-4 md:mb-0">
                                    <button className="flex flex-row items-center justify-center text-gray-400 mr-10">
                                        <i className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                        </i>

                                        <span className="text-base" >Previous</span>
                                    </button>
                                    <span className=" mr-10 text-gray-400"> Step 1/3 </span>
                                    <button className="flex flex-row-reverse items-center justify-center text-gray-800 ">
                                        <i className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </i>
                                        <span className="text-base" >Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="py-8">
                                <h4 className="text-sm text-gray-400 pb-3">Output</h4>
                                <div className=" rounded-sm border border-gray-300 p-3 "> code result</div>

                            </div>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default SimuCard;