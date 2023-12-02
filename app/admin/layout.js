import AdminNav from '@/components/layout/AdminSlider'
import React from 'react'

export default function layout({ children }) {
  return (<>
  <section className='mt-[63px] md:mt-[70px]'>
      <AdminNav/>
  </section>
    <section className="mx-auto max-w-[1500px]  ">
            <div className="ml-16 2xl:ml-0 px-3 md:px-6 py-5 mx-auto">
      { children }
      
      </div>
      </section>
  </>
  )
}
