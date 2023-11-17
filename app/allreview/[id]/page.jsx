import getSingleReview from '@/controller/sainglereview'
import Image from 'next/image'
import React from 'react'

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

          <Image alt={review.image.name} className='mx-2 rounded-lg border max-h-[40rem] object-cover w-full lg:w-[77%]' src={review.image.link} width={900} height={900} />
          <div className=' text-lg w-full lg:w-[20%]'>
            <p className="mt-2  tracking-wider">
              <span className=' text-purple-500 dark:text-purple-400  font-medium'> Rating : </span>  &#9733; {review.rating}/10
            </p>
            <div className='mt-5'>
              <span className=' text-purple-500 dark:text-purple-400  font-medium'>Category : </span>
              {
                review.category?.map((category) => {
                  return (
                    <span key={category} className='px-2'>{category}</span>

                  );
                })
              }
            </div>
            <div className='mt-5 w-full'>
              <span className=' text-purple-500 dark:text-purple-400  font-medium'>Charectors : </span>
                  {
                    (review.characters.length>0) ? (
                    <table className='w-full rounded-lg mt-3 '>
                <tr className='text-purple-500 dark:text-purple-400 bg-slate-300 dark:bg-slate-600 border-b dark:border-slate-500'>
                  <td className='py-1 px-2'>Name</td>
                  <td className='py-1 px-2'>Status</td>
                </tr>
                <tbody>
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
                </tbody>
              </table>
                    )
                    : <p>Charectors not provided by creator</p>
                  }
              
            </div>
          </div>
        </div>
        <div className='flex justify-between flex-wrap mt-5 '>
          <div className='w-full lg:w-[77%]'>
          <p className="mt-2  tracking-wider text-lg text-purple-500 dark:text-purple-400  font-medium">Review :</p>   
          <textarea className='bg-transparent w-full  resize-none h-screen text-justify mt-5' disabled>
          {review.detail}
          </textarea>
          </div>
          <div className="w-full lg:w-[20%]">
          <p className="mt-2  tracking-wider text-lg text-purple-500 dark:text-purple-400  font-medium">comments:</p> 

                 <div>
                    <div className=' mt-5'>
                      <form className='flex justify-between'>
                        <input type="text" className='w-[80%] bg-transparent border rounded-full px-3 py-1 border-gray-400 focus:outline-none focus:ring focus:ring-violet-300' placeholder='Comment' required name="comment" id="" />
                        <button type="submit" value="Submit" className='rounded-full p-2 bg-purple-400 '>🪄</button>
                      </form>
                    </div>
                  comments
                 </div>
          </div>
          </div>
      </div>
    </section>
  )
}

export default page