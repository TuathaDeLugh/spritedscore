import { getStats } from '@/controller/adminstats'
import React from 'react'

export  default async function Admin() {
  const stats = await getStats()
  console.log(stats)
  return (
    <><span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
    Admin Panal
  </span>
  <h2 className="mb-6 text-[32px] font-bold capitalize text-dark lg:text-[4xl]">
    Dashbord
  </h2>
  <div className="text-justify">
</div>
  </>
  )
  
}
