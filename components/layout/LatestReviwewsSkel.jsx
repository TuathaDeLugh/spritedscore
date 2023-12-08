import React from 'react'

export default function LatestReviwewsSkel() {
    const reviews = [1,2,3,4,5,6];
	return (
		<>
			<span className='mb-4 block text-base font-semibold text-purple-700 dark:text-purple-400 overflow-hidden'>
				Latest Reviwews
			</span>
        <div className='md:max-h-screen overflow-y-auto md:pr-2'>
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
        </>
  )
}