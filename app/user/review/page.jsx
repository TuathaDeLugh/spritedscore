import Link from 'next/link';
import React, { Suspense } from 'react'
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import getUserReview from '@/controller/userreview';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export default async function page() {
  const session = await getServerSession(authOptions)
  const reviews = await getUserReview(session.user.username);
  console.log(reviews);
  let i = 1;
  return (
    <section className="px-2 mx-auto max-w-[1500px] md:pt-20 pt-16">
      <div className="container px-6 py-5 mx-auto">
        <span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
          My reviews
        </span>
        <h2 className="mb-6 text-[32px] font-bold capitalize text-dark lg:text-[4xl]">
          Reviews created : 100
        </h2>
        <div className='flex gap-2 w-full mx-2'>
      <Link href={"/user/review/add"} className='bg-purple-600 hover:opacity-80 my-5 font-bold text-white py-3 px-6 rounded'>Add review</Link>
    </div>
        <div
        className={
          "relative  m-3 flex flex-col min-w-0 break-words w-full mb-6 rounded "}>

        <div className=" block w-full rounded overflow-x-auto">
        <table className=" items-center w-full bg-transparent ">
            <thead>
              <tr className='border border-l-0 border-r-0 bg-slate-200 dark:bg-slate-600 dark:border-slate-500'>
                <th
                  className={
                    "pl-6 table-cell pr-1 w-1/12 py-3 text-xs md:text-sm uppercase   font-semibold text-left "
                  }
                >
                  #
                </th>
                <th
                  className={
                    "px-6 table-cell  w-6/12 py-3 text-xs md:text-sm uppercase   font-semibold text-left "
                  }
                >
                  Title
                </th>
                <th
                  className={
                    "hidden sm:table-cell w-2/12 px-6    py-3 text-xs md:text-sm uppercase   font-semibold text-left "
                  }
                >
                  Rateing
                </th>
                
                <th
                  className={
                    " px-6 w-1/12 py-3 text-xs md:text-sm uppercase   font-semibold text-left "
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {reviews?.map((review) => {
                return (
                  <tr key={review._id} className='border-b dark:border-slate-500'>
                    <Suspense fallback={<p>Loading</p>}>
                    <td
                      className={
                        " table-cell pl-6 pr-1    py-3 text-xs md:text-sm    text-left "
                      }
                    >
                      {i++}
                    </td>
                    <td
                      className={
                        "table-cell pl-6 pr-1    py-3 text-xs md:text-sm    text-left "
                      }
                    >
                      {review.title}
                    </td><td
                      className={
                        "hidden sm:table-cell pl-6 pr-1    py-3 text-xs md:text-sm    text-left "
                      }
                    >
                      {review.rating}/10
                    </td>
                    <td
                      className={
                        "table-cell px-6 align-middle   py-3 text-xs md:text-sm flex-grow   text-left "
                      }
                    >
                      <div className=' flex'>
                      <Link href={`/admin/review/edit-review/${review._id}`} title="Edit" >
                        <HiPencilAlt className='text-blue-600' size={25} />
                      </Link>
                        <p className='px-2'></p>
                      <Link href={`/admin/review/${review._id}`} title="View " >
                        <AiOutlineEye className='text-green-600' size={25} />
                      </Link>
                      </div>
                    </td>
                    </Suspense>
                  </tr>

                 )
              })} 
            </tbody>
          </table>
      </div>
      </div>
      </div>
    </section>
  )
}
