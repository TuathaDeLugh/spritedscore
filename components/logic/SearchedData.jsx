import getSearchedReview from '@/controller/search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function SearchedData({query}) {
    const reviews = await getSearchedReview(query) || "not define"
  return (
    <>
    <div className="flex max-h-80 overflow-y-auto pr-2">
        {
            reviews?.length < 1 ?
            (<p>No Review Avaliable Named : <span className='text-purple-500'> {query} </span></p>):(
                <>
                <div className="flex gap-1 flex-wrap w-full">

               

                {
                    reviews?.map((review) =>
                    (
                        <Link href={`/allreview/${review._id}`} key={review._id} className=" flex w-full items-center p-2 border border-slate-300 dark:border-slate-500 hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-200/50 dark:hover:bg-purple-800/10  rounded-md mb-2 ">
                        <Image width={200} height={200} className="w-20 h-20 mr-2 object-cover rounded " src={review.image.link} alt={review.title} />
                        <div>
                          <h2 className="font-semibold">{review.title}</h2>
                          <p className="text-gray-400">Rating: {review.rating}</p>
                        </div>
                      </Link> 
                       
                    )
                    )
                }
                
              
                </div>
                
                </>
            )
        }
    </div></>
  )
}
