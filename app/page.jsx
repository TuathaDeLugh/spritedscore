import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import Slider from '@/components/layout/Slider'
import AllReviews from '@/components/pages/AllReviews'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>

    <div className='px-2 mx-auto max-w-[1500px] md:pt-20 pt-16'>
      <Slider/>
    {session ? (
          <> name = {session.user.name}<br/>
      username = {session.user.username}<br/>
      email = {session.user.email}<br/>
      role = {session.user.role}
      </>
  ):(<>Not Loged In</>)
}
<AllReviews/>
    </div>
  </>
  )
}
