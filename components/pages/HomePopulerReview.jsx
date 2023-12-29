import getPopularReview from '@/controller/popularreview'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function HomePopulerReview() {
	const reviews = await getPopularReview()
	return (
		<>
			<span className='mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400'>
				Popular reviews by category
			</span>
			<div className="gap-4 flex flex-wrap justify-between">
			{reviews?.map(review => {
				return (

			<Link href={`/allreview/${review._id}`} key={review.categoryName}
  className="inline-block grow w-40 rounded-lg bg-slate-50 shadow hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-500 dark:hover:text-purple-400 dark:shadow-gray-600 dark:bg-slate-800 border dark:border-gray-600">
 
<div className="relative rounded-t-lg">
  <Image width={200} height={200}
     className="w-full rounded-t-lg h-24 object-cover object-center"
    src={review.image.link}
    alt={`Category: ${review.image.name}`}
  />
  <div className="absolute inset-0 rounded-t-lg bg-black opacity-50"></div>
  <div className="absolute capitalize inset-0 text-white flex items-center justify-center">
    <h2 className="text-xl font-bold">{review.categoryName.split('_').join(' ')}</h2>
  </div>
</div>
<div className="px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-b-lg">
  <h3 className="text-lg font-semibold">{review.title}</h3>
  <div className="flex items-center">
    <span className="text-sm text-gray-600 dark:text-gray-300">Rating: {review.rating}/10</span>
  </div>
</div>
</Link>
)}
)}
</div>
		</>
	)
}
