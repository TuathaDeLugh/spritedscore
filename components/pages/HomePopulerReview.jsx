import getPopularReview from '@/controller/popularreview'
import Link from 'next/link'
import React from 'react'

export default async function HomePopulerReview() {
	const reviews = await getPopularReview()
	return (
		<>
			<span className='mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400'>
				Popular reviews by category
			</span>
			<div className="overflow-auto pr-5 flex flex-wrap justify-between gap-3">
			{reviews?.map(review => {
				return (

			<Link href={`/allreview/${review._id}`} key={review._id}
  class="inline-block grow w-40 mb-5 rounded-lg bg-slate-50 shadow hover:border-purple-500 dark:hover:border-purple-400 dark:shadow-gray-600 dark:bg-slate-800 border dark:border-gray-600">
	<div className='w-full'>
  <div
    class="border-b border-gray-200 px-6 py-3 dark:border-gray-600 dark:text-neutral-50">
    {review.categoryName}
  </div>
  <div class="p-6">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-purple-500 dark:text-purple-400">
      {review.title}
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    &#9733;{review.rating}/10
    </p>
  </div>
  </div>
</Link>

)}
)}
</div>
		</>
	)
}
