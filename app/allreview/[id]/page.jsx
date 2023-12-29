import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Error from '@/app/not-found'
import DelCommentBtn from '@/components/DelCommentBtn'
import Goback from '@/components/Goback'
import RemoveFromWatchListBtn from '@/components/RemoveFromWatchListBtn'
import WatchListBtn from '@/components/WatchListBtn'
import CommentForm from '@/components/pages/CommentForm'
import getSingleReview from '@/controller/sainglereview'
import getSingleUser from '@/controller/singleuser'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'

async function page({ params: { id } }) {
  const session = await getServerSession(authOptions)
  const review = await getSingleReview(id)
  let user ;
  if (session)
   {
  user =  await getSingleUser(session.user.id)
  }
  return (
    <>
    {
      review ? ( 
        <section className='px-2 mx-auto max-w-[1500px] '>
      <div className='container px-6 py-5 mx-auto'>
        <div className='mb-4 flex items-center'>
          <Goback />
          <span className=' block text-base font-semibold  text-purple-700 dark:text-purple-400 '>
            Anime Review
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <h2 className='mb-6 text-[32px] font-bold capitalize text-dark lg:text-[4xl] '>
            {review.title}
          </h2>
        </div>
        <div className='flex justify-between flex-wrap lg:border-b dark:border-slate-400 pb-10'>
          <div className="flex items-center w-full lg:w-[70%] xl:w-[77%]">
          <Image
            alt={review.image.name}
            className='mx-2 rounded-lg border max-h-[40rem] w-full object-cover bg-slate-200 dark:bg-slate-700'
            src={review.image.link}
            width={900}
            height={600}
          />
          </div>
          <div className=' text-lg w-full lg:w-[25%] xl:w-[20%]'>
            <p className='mt-2  tracking-wider'>
              <span className=' text-purple-500 dark:text-purple-400  font-medium'>
                {' '}
                Rating :{' '}
              </span>{' '}
              &#9733; {review.rating}/10
            </p>
            <div className='mt-5 flex'>
              <span className=' text-purple-500 dark:text-purple-400  font-medium'>
                Category:{' '}
              </span>
              <div className='flex flex-wrap capitalize'>
                {review.category?.map(category => {
                  return (
                    <span key={category} className='px-2'>
                      {category.split('_').join(' ')},
                    </span>
                  )
                })}
              </div>
            </div>
            <p className='mt-5  tracking-wider'>
              <span className=' text-purple-500 dark:text-purple-400  font-medium'>
                {' '}
                Episodes :{' '}
              </span>{' '}
              {review.episodes}
            </p>
            <div className='mt-5 w-full'>
              <span className=' text-purple-500 dark:text-purple-400  font-medium'>
                Charectors :{' '}
              </span>
              {review.characters.length > 0 ? (
                <div className="max-h-[30vh] overflow-y-scroll pr-2">
                <table className='w-full mt-3'>
                  <thead>
                    <tr className='text-purple-500 dark:text-purple-400 bg-slate-300 dark:bg-slate-600 border-b dark:border-slate-500'>
                      <td className='py-1 px-2'>Name</td>
                      <td className='py-1 px-2'>Status</td>
                    </tr>
                  </thead>
                  <tbody className=''>
                    {review.characters?.map(character => {
                      return (
                        <tr
                          key={character.name}
                          className='border-b dark:border-slate-500'
                        >
                          <td className='py-1 px-2'>{character.name}</td>
                          <td className='py-1 px-2'>{character.role}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                </div>
              ) : (
                <p>Charectors not provided by creator</p>
              )}
            </div>
            {review.trailer == '/' ? null : (
              <Link
                href={review.trailer}
                target='_blank'
                className='inline-block text-white w-full text-center mt-5 py-2 px-5 rounded-full border text-lg bg-purple-500 dark:bg-purple-400 hover:text-purple-400 hover:border-purple-400 hover:bg-transparent dark:hover:bg-transparent  font-medium'
              >
                Watch Trailer
              </Link>
            )}
            { session ? (
            session?.user?.id &&
              (user.watchlist.indexOf(review._id) >= 0 ? (
                <RemoveFromWatchListBtn
                  uid={session.user.id}
                  rid={review._id}
                />
              ) : (
                <WatchListBtn uid={session.user.id} rid={review._id} />
              ))
            ) : (<p className=' text-base p-3' >Please <Link href={'/login'} className='text-purple-500 hover:underline' >Login</Link> For add to watchlist</p>)
            }
          </div>
        </div>
        <div className='flex justify-between flex-wrap mt-5 items-start'>
          <div className='w-full lg:w-[70%] xl:w-[77%]'>
            <p className='mt-2  tracking-wider text-lg text-purple-500 dark:text-purple-400  font-medium'>
              Review :
            </p>
            <div 
              className='min-h-[80vh] text-justify mt-5 '
              dangerouslySetInnerHTML={{ __html: review.detail.replace(/\n/g, '<br>') }}></div>
            {/* <textarea
              className='bg-transparent w-full  resize-none h-[80vh] text-justify mt-5 pr-3'
              value={review.detail}
              disabled
            ></textarea> */}
          </div>
          {/* comment */}
          <div className='w-full lg:w-[25%] xl:w-[20%] lg:sticky top-[70px]'>
            <p className='mt-2  tracking-wider text-lg text-purple-500 dark:text-purple-400  font-medium'>
              comments:
            </p>
            <CommentForm reviewid={review._id} />
            <div>
              {review.comments.length > 0 ? (
                <div className='mt-3 max-h-[50vh] lg:max-h-[75vh] overflow-y-auto flex flex-col gap-4'>
                  {review.comments?.map(comment => {
                    return (
                      <div
                        key={comment._id}
                        className=' rounded-lg bg-slate-100 dark:bg-gray-700 p-3 mr-3 w-[98%]'
                      >
                        <div className='py-1 px-2 flex border-b dark:border-gray-500 justify-between'>
                          <div className='flex items-center'>
                            {comment.useravatar ? (
                              <Image width={50} height={50}
                                src={comment.useravatar}
                                alt={comment.createdby}
                                className='border dark:border-slate-400 mr-1 w-7 h-7 rounded-full'
                              />
                            ) : (
                              <AiOutlineUser
                                size={20}
                                className='border dark:border-slate-400 mr-1 w-7 h-7 rounded-full'
                              />
                            )}{' '}
                            {comment.username}
                          </div>
                          {session &&
                          (review.creator.userid == session.user?.id ||
                            comment.userid == session.user?.id ||
                            session.user.role == 'admin') ? (
                            <div>
                              <DelCommentBtn
                                revid={review._id}
                                commid={comment._id}
                              />
                            </div>
                          ) : null}
                        </div>
                        <div className='py-1 px-2 overflow-x-scroll'>{comment.comment}</div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <p className='mt-5'>No comments avaliable become the first</p>
              )}
            </div>
          </div>
        </div>
        <span className='mt-4 flex items-center text-base font-semibold  text-purple-700 dark:text-purple-400 '>
          Review Posted by :{' '}
          {review.creator.avatar ? (
            <Image width={50} height={50}
              src={review.creator.avatar}
              alt={review.creator.createdby}
              className='ml-3 mr-1 w-7 h-7 rounded-full'
            />
          ) : (
            <AiOutlineUser
              size={20}
              className='ml-3 mr-1 w-7 h-7 rounded-full'
            />
          )}{' '}
          {review.creator.createdby}
        </span>
      </div>
    </section>
      ) : (<Error/>)
    }
    
    </>
  )
}

export default page
