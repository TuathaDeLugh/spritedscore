import EditReviewForm from '@/components/pages/EditReviewFrom'
import getSingleReview from '@/controller/sainglereview'
import React from 'react'

export default async function EditReview({ params: { id } }) {
  const review = await getSingleReview(id)
  // console.log(review)
  return (
    <section className="px-2 mx-auto max-w-[1500px] md:pt-20 pt-16">
      <div className="container px-6 py-5 mx-auto">
        <span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
          Edit Review
        </span>
        <h2 className="mb-6 text-[32px] font-bold text-dark lg:text-[4xl]">
          {review.title} 
        </h2>
      <EditReviewForm review={review}/>
      </div>
    </section>
  )
}
