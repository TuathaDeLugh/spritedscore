import React from 'react'

export default function SkelReview() {
    const reviews = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
    {
        

            reviews?.map((review) => {
                return (
                    <div
                        key={review}
                        className="flex items-end overflow-hidden bg-cover rounded-lg h-96 border border-slate-200 dark:border-slate-600 hover:scale-105  animate-pulse duration-300 bg-slate-200 dark:bg-slate-700"
                        
                    >
                        <div className="w-full px-4 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white bg-slate-300 dark:bg-slate-600 rounded-full">
                                <span className=' px-4 rounded-full'></span>
                            </h2>
                            <p className="mt-2 text-lg tracking-wider">
                                <span className=' px-10 rounded-full bg-slate-300 dark:bg-slate-600'></span>
                            </p>
                        </div>
                    </div>
                );
            })
        }
</div>
  )
}
