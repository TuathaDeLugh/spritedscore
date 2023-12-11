import React from 'react'

export default function HomePageskel() {
    const reviews = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6]
  return (
    <>
    			<div className='container px-6 md:px-0 py-3 mx-auto flex flex-wrap max-h-min'>
				<div className='w-full md:w-2/3 md:pr-5'>
                <span className='mb-4 block text-base font-semibold text-purple-700 dark:text-purple-400 overflow-hidden'>
				Latest Reviwews
			</span>
        <div className='overflow-hidden max-h-[80vh] md:pr-2 '>
			{reviews?.map(review => {
				return (
					<div
						key={review}
						className='flex flex-wrap  overflow-auto bg-white rounded-lg shadow-lg dark:shadow-gray-700/50 dark:bg-slate-800 mb-5 border dark:border-slate-600 animate-pulse duration-300'
					>
						<div
							className='h-60 md:h-auto w-full md:w-1/2 bg-cover bg-slate-100 dark:bg-slate-700'
						></div>

    <div className="w-full md:w-1/2 px-4 py-8  flex-wrap flex flex-col ">
        <h1 className="text-2xl font-bold te bg-slate-200 dark:bg-slate-700 p-3 w-[90%] rounded-full mb-2"></h1>

        <div className="flex mt-2 item-center flex-wrap mb-3">
        <span className="inline-block text-lg font-semibold bg-slate-200 dark:bg-slate-700 p-2 w-[60%] rounded-full">
        </span>


        </div>

        <div className="mt-2 flex-wrap flex items-center gap-1 mb-3">
            <span className="block text-lg font-semibold text-purple-700 dark:text-purple-400  bg-slate-200 dark:bg-slate-700 p-2 w-[50%] rounded-full">
        </span></div>


        <div className="flex justify-between mt-3 item-center ">
            <h1 className="inline-block w-20 rounded-full bg-slate-200 dark:bg-slate-700"></h1>
            <div className="inline-block mr-2 px-2 py-2 text-xs font-bold text-slate-200 dark:text-slate-700 uppercase transition-colors duration-300 transform bg-slate-200 dark:bg-slate-700 rounded focus:outline-none ">Read Review</div>
        </div>
    </div>
</div>
            )})}
            </div>
                </div>
                <div className='md:border-l dark:border-gray-500 md:pl-5 w-full md:w-1/3'>
                <span className='mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400'>
				Popular reviews by category
			</span>
			<div className="overflow-hidden max-h-[80vh] gap-5 md:pr-5 flex flex-wrap justify-between animate-pulse duration-300">
			{reviews?.map(review => {
				return (

			<div href={`/allreview/${review}`} key={review}
  className="inline-block mb-3 grow w-40 rounded-lg bg-slate-50 shadow dark:shadow-gray-600 dark:bg-slate-800 border dark:border-gray-600">
 
<div className="relative rounded-t-lg">
  <div width={200} height={200}
     className="w-full rounded-t-lg h-24 object-cover object-center"
  />
  <div className="absolute inset-0 rounded-t-lg bg-slate-500 dark:bg-slate-700 opacity-50"></div>
  <div className="absolute capitalize inset-0 text-white flex items-center justify-center">
    <h2 className="text-xl font-bold bg-slate-200 dark:bg-slate-700 p-4 w-[50%] rounded-full"></h2>
  </div>
</div>
<div className="px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-b-lg">
  <h3 className="text-lg font-semibold bg-slate-200 dark:bg-slate-700 p-3 w-[85%] rounded-full mb-1"></h3>
  <div className="bg-slate-200 dark:bg-slate-700 p-2 w-[40%] rounded-full">
  </div>
</div>
</div>
)}
)}
</div>
				</div>
                </div>
    </>
  )
}
