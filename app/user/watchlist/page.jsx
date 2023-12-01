import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import UserWatchlist from '@/components/pages/UserWatchlist'
import getSingleUser from '@/controller/singleuser'
import { getReviews } from '@/controller/watchlist'
import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'

const Watchlist = async () => {
  const session = await getServerSession(authOptions)
  // const user = await getSingleUser(session.user.id)
  const user = await getReviews(session.user.id)

  return (
    <section className='px-2 mx-auto max-w-[1500px] md:pt-20 pt-16'>
      <div className='container px-6 py-5 mx-auto'>
        <h2 className='mb-6 text-[32px] font-bold capitalize text-dark lg:text-[4xl]'>
          My Watchlist
        </h2>
        <ul>
          {user.watchlist.map(review => (
            <li key={review._id}>
              <UserWatchlist review={review} session={session} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Watchlist
