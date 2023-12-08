import React from 'react'

export default function PopulerReviewSel() {
	const reviews = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6]
	return (
		<>
			<span className='mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400'>
				Popular reviews by category
			</span>
			<div className="overflow-hidden md:max-h-screen gap-5 md:pr-5 flex flex-wrap justify-between animate-pulse duration-300">
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
		</>
	)
}