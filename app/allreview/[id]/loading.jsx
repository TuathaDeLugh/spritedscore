import Progress from '@/components/layout/Progress'
import CommentForm from '@/components/pages/CommentForm';
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';

export default function LoadingReview() {
  const review = {
    category:[
      '1','2','3'
    ],
    characters:[
      1,2,3
    ],
    comments:[
      1,2,3,4,5,6,7
    ]
  }
  return (
    <>
    <section className="px-2 mx-auto max-w-[1500px] md:pt-20 pt-16 animate-pulse duration-300">
      <div className="container px-6 py-5 mx-auto">
        <div className="mb-4 w-40 text-base font-semibold p-2 bg-slate-300 dark:bg-slate-600 rounded-full"/>
          <div className="mb-6 w-2/3 p-5 bg-slate-300 dark:bg-slate-600 rounded-full"/>
          
        <div className='flex justify-between flex-wrap lg:border-b dark:border-slate-400 pb-10'>

          <div className='mx-2 rounded-lg h-48 md:h-[40rem] bg-slate-200 dark:bg-slate-700 w-full lg:w-[70%] xl:w-[77%]' />
          <div className=' text-lg w-full lg:w-[25%] xl:w-[20%]'>
            <div className="mt-2 w-60  bg-slate-300 dark:bg-slate-600 rounded-full p-3 "/>
            <div className='mt-5'>
            <div className="mt-2 w-36 bg-slate-300 dark:bg-slate-600 rounded-full p-3 "/>

              <div className="flex flex-wrap">
                {
                  review.category?.map((category) => {
                    return (
                      <div key={category.split('_').join(' ')} className='bg-slate-300 dark:bg-slate-600 rounded-full mt-2 w-16 p-3 mx-2'/>

                    );
                  })
                }

              </div>
            </div>
            <div className="mt-5 w-44  bg-slate-300 dark:bg-slate-600 rounded-full p-3 "/>
            <div className='mt-5 w-full'>
            <div className="mt-5 w-36  bg-slate-300 dark:bg-slate-600 rounded-full p-3 "/>
              
                  
                    <div className='mt-3 w-full bg-slate-300 dark:bg-slate-600 rounded-full p-3'/>
                    <div className='mt-3 w-full bg-slate-300 dark:bg-slate-600 rounded-full p-3'/>
                    <div className='mt-3 w-full bg-slate-300 dark:bg-slate-600 rounded-full p-3'/>
                    
                  
                

            </div>
            
                <div className="w-full mt-5 py-5 px-5 rounded-full bg-slate-400 dark:bg-slate-700 "/>
                <div className="w-full mt-5 py-5 px-5 rounded-full bg-slate-400 dark:bg-slate-700  "/>

             
          </div>
        </div>
        <div className='flex justify-between flex-wrap mt-5 '>
          <div className='w-full lg:w-[70%] xl:w-[77%]'>

          <div className="mt-2 w-36  bg-slate-300 dark:bg-slate-600 rounded-full p-2"/>

            <div className='w-full mt-5'>
          <div className="mt-2 w-44  bg-slate-300 dark:bg-slate-600 rounded-full p-1"/>
          <div className="mt-2 w-full  bg-slate-300 dark:bg-slate-600 rounded-lg p-24"/>
          <div className="mt-4 w-44  bg-slate-300 dark:bg-slate-600 rounded-full p-1"/>
          <div className="mt-2 w-full  bg-slate-300 dark:bg-slate-600 rounded-lg p-28"/>
          <div className="mt-4 w-44  bg-slate-300 dark:bg-slate-600 rounded-full p-1"/>
          <div className="mt-2 w-full  bg-slate-300 dark:bg-slate-600 rounded-lg p-32"/>  
            </div>

          </div>
          <div className="w-full lg:w-[25%] xl:w-[20%]">
          <div className="mt-2 w-36  bg-slate-300 dark:bg-slate-600 rounded-full p-2"/>
          <div className='flex justify-between'>

          <div className=' mt-4 w-9/12 rounded-full bg-slate-100 dark:bg-gray-700 p-5'/>
          <div className=' mt-4 rounded-full bg-slate-100 dark:bg-gray-700 p-5'/>

          </div>
            <div>

              
                  <div className='mt-5 max-h-[50vh] lg:max-h-[90vh] overflow-hidden'>

                    {
                      review.comments?.map((comment) => {

                        return (
                          <div key={comment}  className=' mt-4 rounded-lg bg-slate-100 dark:bg-gray-700 p-3'>

                            <div className='py-1 px-2 flex border-b dark:border-gray-500 justify-between'>
                              <div className='flex items-center'><div className="border bg-slate-400 dark:bg-slate-700 dark:border-slate-400 mr-1 w-7 h-7 rounded-full" />
                              <div className=" w-36  bg-slate-300 dark:bg-slate-600 rounded-full p-2"/>
                               </div>
                            </div>
                          <div className=" w-46 mt-2 bg-slate-300 dark:bg-slate-600 rounded-full p-2"/>

                          </div>

                        );
                      })
                    }
                  </div>

                
            </div>
          </div>
        </div>
        <div className="mt-7 w-40 text-base font-semibold p-2 bg-slate-300 dark:bg-slate-600 rounded-full"/>
      </div>
    </section>
    </>
  )
}
