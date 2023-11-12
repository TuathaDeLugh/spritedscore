import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import ReviewForm from '@/components/pages/CreateReview'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page() {
  const session = await getServerSession(authOptions)
    const name = session.user.username;
    const avatar = session.user.avatar;
  return (
    <section class="px-2 mx-auto max-w-[1500px] md:pt-20 pt-16">
      <ReviewForm createdby={name} avatar={avatar}/>
    </section>
  )
}
