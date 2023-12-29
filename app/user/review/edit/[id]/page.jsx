import Goback from '@/components/Goback'
import EditReviewForm from '@/components/pages/EditReviewFrom'
import getSingleReview from '@/controller/sainglereview'
import React from 'react'

export default async function EditReview({ params: { id } }) {
  const review = await getSingleReview(id)
  return (
    <section className="px-2 mx-auto max-w-[1500px] ">
      <div className="container px-6 py-5 mx-auto">
        <span className="mb-4 flex items-center text-base font-semibold  text-purple-700 dark:text-purple-400">
          <Goback/> Edit Review
        </span>
        <h2 className="mb-6 text-[32px] font-bold text-dark lg:text-[4xl]">
          {review.title} 
        </h2>
      <EditReviewForm review={review}/>
      </div>
    </section>
  )
}
