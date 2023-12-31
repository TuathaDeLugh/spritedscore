import { getStats } from '@/controller/adminstats'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaComments, FaEnvelope, FaFileAlt, FaStar, FaUser, FaUsers } from 'react-icons/fa'

export default async function Admin() {
  const stats = await getStats()
  let wno=1 ,rno = 1
  return (
    <><span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
      Admin Panal
    </span>
      <h2 className="mb-6 text-[32px] font-bold capitalize text-dark lg:text-[4xl]">
        Dashbord
      </h2>
      { 
        stats && stats.mostCommentedReview && stats.mostCommentedReview.image && stats.mostCommentedReview.image.link ? (

          <>

            <div className="flex justify-around gap-4 w-full border-b pb-2 md:pb-5 dark:border-slate-400">
              <div className=" relative items-center border border-blue-500 rounded-md p-4 bg-blue-50 dark:bg-blue-600/50 mb-4 sm:mb-0 w-1/3 ">
                <FaFileAlt className=" absolute text-blue-500 text-3xl mb-2 right-3 hidden sm:block" />
                <p className='text-5xl mb-2'>{stats.totalReviews}</p>
                <p>Total Reviews</p>
              </div>
              <div className="w-1/3 relative items-center border border-green-500 rounded-md p-4 bg-green-50 dark:bg-green-600/50 mb-4 sm:mb-0 ">
                <FaEnvelope className="absolute text-green-500 text-3xl mb-2 right-3 hidden sm:block" />
                <p className='text-5xl mb-2'>{stats.totalEmails}</p>
                <p>Total Emails</p>
              </div>
              <div className="w-1/3 relative items-center border border-purple-500 rounded-md p-4 bg-purple-50 dark:bg-purple-600/50 mb-4 sm:mb-0 ">
                <FaUsers className="absolute text-purple-500 text-3xl mb-2 right-3 hidden sm:block" />
                <p className='text-5xl mb-2'>{stats.totalUsers}</p>
                <p>Total Users</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold my-4">Top Performers</h2>

              <div className="flex gap-4 flex-col md:flex-row border-b pb-4">

                  {/* Most reviews by user */}
                <div className="border border-blue-500 dark:bg-blue-900/50 rounded-md p-4 bg-blue-50 mb-4 sm:mb-0 md:w-1/3">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <FaStar className="text-blue-500 text-3xl" />
                    <p className="text-gray-700 dark:text-slate-400 font-semibold text-lg">Most Reviews By User</p>
                    <p className="text-lg font-semibold">{stats.mostReviewsUser.username}</p>
                    <p className="text-gray-700 dark:text-slate-400">{stats.mostReviewsUser.reviewCount} Reviews</p>
                  </div>
                  <div className="mt-2 flex items-center justify-center">
                    <Image
                      width={200}
                      height={200}
                      src={stats.mostReviewsUser.useravatar}
                      alt={stats.mostReviewsUser.username}
                      className="rounded-full w-24 h-24 object-cover object-center"
                    />
                  </div>
                </div>

                {/* Most Comented Review */}
                <div className="info-card text-center border border-green-500 dark:bg-green-900/50 rounded-md p-4 bg-green-50 mb-4 sm:mb-0 md:w-1/3">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <FaComments className="text-green-500 text-3xl" />
                    <p className="text-gray-700 dark:text-slate-400 font-semibold text-lg">Most Commented Review</p>
                    <Link href={`/allreview/${stats.mostCommentedReview._id}`} className="text-blue-500 text-lg font-semibold hover:underline">
                      {stats.mostCommentedReview.title}
                    </Link>
                    <p className="text-gray-700 dark:text-slate-400">{stats.mostCommentedReview.numComments} Comments</p>
                  </div>
                  {stats.mostCommentedReview.image && stats.mostCommentedReview.image.link && (
                    <div className="mt-2 flex items-center justify-center">
                      <Image
                        width={400}
                        height={200}
                        src={stats.mostCommentedReview.image.link}
                        alt={stats.mostCommentedReview.image.name}
                        className="rounded-lg w-32 h-24 object-cover object-center grow"
                      />
                    </div>
                  )}
                </div>

                    {/* Most Commanted User */}
                <div className="border border-purple-500 dark:bg-purple-900/50 rounded-md p-4 bg-purple-50 mb-4 sm:mb-0 md:w-1/3">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <FaUser className="text-purple-500 text-3xl" />
                    <p className="text-gray-700 dark:text-slate-400 font-semibold text-lg">Most Commented User</p>
                    <p className="text-lg font-semibold">{stats.mostCommentedUser.username}</p>
                    <p className="text-gray-700 dark:text-slate-400">{stats.mostCommentedUser.count} Comments</p>
                  </div>
                  <div className="mt-2 flex items-center justify-center">
                    <Image
                      width={200}
                      height={200}
                      src={stats.mostCommentedUser.useravatar}
                      alt={stats.mostCommentedUser.username}
                      className="rounded-full w-24 h-24 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-4 w-full flex-wrap">

            <div className='grow lg:w-[33%] lg:border-r dark:border-gray-400/80 pr-3'>
      <h2 className="text-xl font-semibold mb-4">Most Watchlisted Users</h2>
      <div className='block w-full overflow-x-auto rounded'>
      <table className="min-w-full ">
        <thead>
          <tr className=' bg-slate-200/50 dark:bg-slate-700 '>
            <th className="py-2 px-4  w-5 ">#</th>
            <th className="py-2 px-4 ">Username</th>
            <th className="py-2 px-4  w-10">Watchlist Count</th>
          </tr>
        </thead>
        <tbody>
          {stats.mostWatchlistedUsers.map((user) => (
            <tr key={user._id} className='border-b dark:border-gray-600'>
              <td className="py-3 px-4 ">{wno++}</td>
              <td className="py-3 px-4 ">{user.username}</td>
              <td className="py-3 px-4  text-center">{user.watchlistCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
      <div className=' lg:w-[65%] grow'>
      <h2 className="text-xl font-semibold mb-4">Latest Reviews</h2>
      <div className='block w-full overflow-x-auto rounded'>
      <table className="min-w-full border-gray-300">
        <thead>
          <tr className='bg-slate-200/50 dark:bg-slate-700'>
            <th className="py-2 px-4  w-5">#</th>
            <th className="py-2 px-4 ">Title</th>
            <th className="py-2 px-4 ">Rating</th>
            <th className="py-2 px-4 hidden md:table-cell ">Episodes</th>
            <th className="py-2 px-4  w-20">Image</th>
          </tr>
        </thead>
        <tbody>
          {stats.latestReviews.map((review) => (
            <tr key={review._id} className='border-b dark:border-gray-600'>
              <td className="py-2 px-4  ">{rno++}</td>
              <td className="py-2 px-4 "><Link className='text-blue-500 hover:underline' href={`/allreview/${review._id}`}>{review.title}</Link></td>
              <td className="py-2 px-4 text-center ">{review.rating}</td>
              <td className="py-2 px-4 hidden md:table-cell ">{review.episodes}</td>
              <td className="py-2 px-4 ">
                <Image width={100} height={70} src={review.image.link} alt={review.title} className="h-12 w-12 rounded object-cover" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
            </div>
          </>
        ) : null
      }
    </>
  )

}
