import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Goback from '@/components/Goback'
import ReviewForm from '@/components/pages/CreateReview'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'

export default async function NewReview() {
  const session = await getServerSession(authOptions)
    const name = session.user.username;
    const avatar = session.user.avatar;
    const userid = session.user.id;
  return (
    <section className="px-2 mx-auto max-w-[1500px] ">
      <div className="container px-6 py-5 mx-auto">
        <span className="mb-4 flex items-center text-base font-semibold  text-purple-700 dark:text-purple-400">
         <Goback/> New Review
        </span>
        <h2 className="mb-6 text-[22px] font-bold text-dark lg:text-4xl flex gap-2 items-center">
          Will Create By : 
          {session.user.username ? (
            <Image width={50} height={50}
              src={session.user.avatar}
              alt= {session.user.username} 
              className='ml-3 mr-1 w-10 h-10 rounded-full'
            />
          ) : (
            <AiOutlineUser
              size={20}
              className='ml-3 mr-1 w-7 h-7 rounded-full'
            />
          )}{' '}
          {session.user.username} 
        </h2>
      <ReviewForm createdby={name} avatar={avatar} userid={userid}/>
      </div>
    </section>
  )
}
