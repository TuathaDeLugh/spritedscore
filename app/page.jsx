import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>
    <div className='px-2 mx-auto max-w-[1500px] md:pt-20 pt-16'>
    {session ? (
          <> name = {session.user.name}<br/>
      username = {session.user.username}<br/>
      avatar = {session.user.image}<br/>
      email = {session.user.email}<br/>
      role = {session.user.role}
      </>
  ):(<>Not Loged In</>)
}
    </div>
  </>
  )
}
