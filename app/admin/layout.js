import AdminNav from '@/components/layout/AdminSlider'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function layout({ children }) {
  const session = await getServerSession(authOptions)
    
    if (session && session.user && session.user.role=='admin'){

        return (<>
        <section className='mt-[63px] md:mt-[70px]'>
      <AdminNav/>
  </section>
    <section className="mx-auto max-w-[1500px]">
            <div className="ml-16 2xl:ml-0 px-3 md:px-6 py-5 mx-auto">
      { children }
      
      </div>
      </section>
  </>
  )
}
    else{
        throw new Error("Not Authorized")
    }
}