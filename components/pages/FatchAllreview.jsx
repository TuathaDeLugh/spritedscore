import getAllReviews from '@/controller/allreview';
import Link from 'next/link';
import React from 'react'

export default async function FatchAllreview() {
    const reviews = await getAllReviews();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
    {
        reviews ? (<>{

            reviews.map((review) => {
                return (
                    <Link
                        href={`/allreview/${review._id}`}
                        key={review._id}
                        className="flex items-end overflow-hidden bg-cover rounded-lg h-96 border border-slate-200 dark:border-slate-600 hover:scale-105  hover:border-purple-500 dark:hover:border-purple-400  ease-in-out duration-300"
                        style={{ backgroundImage: `url(${review.image})` }}
                    >
                        <div className="w-full px-4 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                                {review.title}
                            </h2>
                            <p className="mt-2 text-lg tracking-wider text-purple-500 uppercase dark:text-purple-400 ">
                                &#9733; {review.rating}/10
                            </p>
                        </div>
                    </Link>
                );
            })
        }</>) : (
            <p>No data available.</p>
        )}
</div>
  )
}