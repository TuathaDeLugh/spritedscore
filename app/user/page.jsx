import getSingleUser from '@/controller/singleuser';
import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import EditProfile from '@/components/pages/EditProfile';

export default async function Profile() {
  const session = await getServerSession(authOptions)
  const userdata = await getSingleUser(session.user.id)
  return (
    <div className='px-2 mx-auto max-w-[1500px] pt-20 min-h-screen flex items-center'>
      <div className=" w-auto lg:w-[25rem] mx-auto p-6 mt-0 m-3 bg-white dark:bg-slate-700 border dark:border-slate-500 rounded-md shadow-md">
      <span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
          Profile
        </span>
        <h2 className="mb-6 text-[32px] font-bold text-dark lg:text-[4xl]">
          {session.user.username} 
        </h2>
        <EditProfile userdata={userdata}/>
    </div>
    </div>
  )
}
