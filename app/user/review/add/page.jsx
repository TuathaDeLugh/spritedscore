import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import ReviewForm from '@/components/pages/CreateReview'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page() {
  const session = await getServerSession(authOptions)
    const name = session.user.username;
    const avatar = session.user.avatar;
  return (
    <section className="px-2 mx-auto max-w-[1500px] md:pt-20 pt-16">
      <div className="container px-6 py-5 mx-auto">
        <span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
          New Review
        </span>
        <h2 className="mb-6 text-[32px] font-bold text-dark lg:text-[4xl]">
          Will Create By : {session.user.username} 
        </h2>
      <ReviewForm createdby={name} avatar={avatar}/>
      </div>
    </section>
  )
}
