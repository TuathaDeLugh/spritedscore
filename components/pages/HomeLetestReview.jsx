import getLetestReview from '@/controller/letestreview'
import Link from 'next/link'
import React from 'react'

export default async function HomeLetestReview() {
	const reviews = await getLetestReview()
	return (
		<>
			<span className='mb-4 block text-base font-semibold text-purple-700 dark:text-purple-400'>
				Latest Reviwews
			</span>
        <div className='md:max-h-screen overflow-y-auto md:pr-2'>
			{reviews?.map(review => {
				return (
					<div
						key={review._id}
						className='flex flex-wrap  overflow-auto bg-white rounded-lg shadow-lg dark:shadow-gray-700/50 dark:bg-slate-800 mb-5 border dark:border-slate-600'
					>
						<div
							className='h-60 md:h-auto w-full md:w-1/2 bg-cover'
							style={{
								backgroundImage: `url(${review.image.link})`,
								backgroundPosition: 'center center',
							}}
						></div>

    <div className="w-full md:w-1/2 px-4 py-8  flex-wrap flex flex-col">
        <h1 className="text-2xl font-bold text-purple-500 dark:text-purple-400 mb-5">{review.title}</h1>

        <div className="flex mt-2 item-center flex-wrap mb-3">
        <span className="block text-lg font-semibold text-purple-700 dark:text-purple-400">
            Category :
        </span>
                {
                  review.category?.map((category) => {
                    return (
                      <span key={category} className='block px-2 text-lg'>{category.split('_').join(' ')}</span>

                    );
                  })
                }

        </div>

        <div className="mt-2 flex-wrap flex items-center gap-1 mb-3">
            <span className="block text-lg font-semibold text-purple-700 dark:text-purple-400">
            Episodes :
        </span>{review.episodes}</div>


        <div className="flex justify-between mt-3 item-center ">
            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl flex gap-2"><span className="block text-lg font-semibold text-purple-700 dark:text-purple-400">&#9733;</span> {review.rating}/10</h1>
            <Link href={`/allreview/${review._id}`} className="inline-block mr-2 px-2 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-purple-500/80 rounded dark:bg-purple-400/80 hover:bg-purple-700 dark:hover:bg-purple-600 focus:outline-none ">Read Review</Link>
        </div>
    </div>
</div>
            )})}
            </div>
        </>
  )
}
