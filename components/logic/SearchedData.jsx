import getSearchedReview from '@/controller/search'
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
                <ul className='w-full'>

                {
                    reviews?.map((review) =>
                    (
                        <li key={review._id}>
                            <Link href={`/allreview/${review._id}`} className=' inline-block w-full hover:bg-purple-500/50 p-2 rounded-lg' >
                            {review.title}
                            </Link>
                        </li>
                    )
                    )
                }
                
                </ul>
                
                </>
            )
        }
    </div></>
  )
}
