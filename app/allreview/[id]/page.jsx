import CommentForm from '@/components/pages/CommentForm'
import getSingleReview from '@/controller/sainglereview'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineUser } from "react-icons/ai";

async function page({ params: { id } }) {
  const review = await getSingleReview(id)
  return (
    <section className="px-2 mx-auto max-w-[1500px] md:pt-20 pt-16">
      <div className="container px-6 py-5 mx-auto">
        <span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
          Anime Review
        </span>
        <div className="flex items-center justify-between">

          <h2 className="mb-6 text-[32px] font-bold capitalize text-dark lg:text-[4xl] ">
            {review.title}
          </h2>
        </div>
        <div className='flex justify-between flex-wrap lg:border-b dark:border-slate-400 pb-10'>

          <Image alt={review.image.name} className='mx-2 rounded-lg border max-h-[40rem] object-cover w-full lg:w-[70%] xl:w-[77%]' src={review.image.link} width={900} height={900} />
          <div className=' text-lg w-full lg:w-[25%] xl:w-[20%]'>
            <p className="mt-2  tracking-wider">
              <span className=' text-purple-500 dark:text-purple-400  font-medium'> Rating : </span>  &#9733; {review.rating}/10
            </p>
            <div className='mt-5'>
              <span className=' text-purple-500 dark:text-purple-400  font-medium'>Category : </span>
              <div className="flex flex-wrap">
                {
                  review.category?.map((category) => {
                    return (
                      <span key={category} className='px-2'>{category}</span>

                    );
                  })
                }

              </div>
            </div>
            <div className='mt-5 w-full'>
              <span className=' text-purple-500 dark:text-purple-400  font-medium'>Charectors : </span>
              {
                (review.characters.length > 0) ? (
                  <table className='w-full rounded-lg mt-3 '>
                    <tr className='text-purple-500 dark:text-purple-400 bg-slate-300 dark:bg-slate-600 border-b dark:border-slate-500'>
                      <td className='py-1 px-2'>Name</td>
                      <td className='py-1 px-2'>Status</td>
                    </tr>

                    {
                      review.characters?.map((character) => {

                        return (
                          <tr key={character.name} className='border-b dark:border-slate-500'>

                            <td className='py-1 px-2'>{character.name}</td>
                            <td className='py-1 px-2'>{character.role}</td>

                          </tr>

                        );
                      })
                    }

                  </table>
                )
                  : <p>Charectors not provided by creator</p>
              }

            </div>
            {
              (review.trailer == "/") ? null : (
                <Link href={review.trailer} target='_blank' className="inline-block text-white w-full text-center mt-5 py-2 px-5 rounded-full border text-lg bg-purple-500 dark:bg-purple-400 hover:text-purple-400 hover:border-purple-400 hover:bg-transparent dark:hover:bg-transparent  font-medium">Watch Trailer</Link>
              )
            }
          </div>
        </div>
        <div className='flex justify-between flex-wrap mt-5 '>
          <div className='w-full lg:w-[70%] xl:w-[77%]'>

            <p className="mt-2  tracking-wider text-lg text-purple-500 dark:text-purple-400  font-medium">Review :</p>
            <textarea className='bg-transparent w-full  resize-none h-screen text-justify mt-5' disabled>
              {review.detail}
            </textarea>

          </div>
          <div className="w-full lg:w-[25%] xl:w-[20%]">
            <p className="mt-2  tracking-wider text-lg text-purple-500 dark:text-purple-400  font-medium">comments:</p>
            <CommentForm reviewid={review._id} />
            <div>

              {
                (review.comments.length > 0) ? (
                  <div className='mt-5 max-h-[50vh] lg:max-h-screen'>

                    {
                      review.comments?.map((comment) => {

                        return (
                          <div key={comment.name} className=' mt-4 border-b dark:border-slate-500'>

                            <div className='py-1 px-2 flex'>
                              {comment.useravatar ? (<img src={comment.useravatar} alt={comment.createdby} className='ml-3 mr-1 w-7 h-7 rounded-full' />) : <AiOutlineUser size={20} className="ml-3 mr-1 w-7 h-7 rounded-full" />} {comment.username}</div>
                            <div className='py-1 px-2'>{comment.comment}</div>

                          </div>

                        );
                      })
                    }
                  </div>

                )
                  : <p className='mt-5'>No comments avaliable become the first</p>
              }
            </div>
          </div>
        </div>
        <span className="mb-4 flex items-center text-base font-semibold  text-purple-700 dark:text-purple-400 ">
          Review Posted by : {review.creator.avatar ? (<img src={review.creator.avatar} alt={review.creator.createdby} className='ml-3 mr-1 w-7 h-7 rounded-full' />) : <AiOutlineUser size={20} className="ml-3 mr-1 w-7 h-7 rounded-full" />} {review.creator.createdby}
        </span>
      </div>
    </section>
  )
}

export default page