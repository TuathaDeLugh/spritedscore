import { ReviewCount } from '@/components/logic/AdminCount'
import React from 'react'

export default function AdminReview() {
  return (
    <><span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
    Manage All Reviews
  </span>
  <h2 className="mb-6 text-[32px] font-bold capitalize text-dark lg:text-[4xl]">
    Total Reviews : <ReviewCount/>
  </h2>

  </>
  )
}
