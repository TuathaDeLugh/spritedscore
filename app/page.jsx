import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>

    <div className='px-2 mx-auto max-w-[1500px] md:pt-20 pt-16'>
    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
    <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">

        <div className="lg:mx-2 lg:order-2">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">Dive into the captivating world of anime with  <span className="text-purple-600 dark:text-purple-400">Spirited Score</span></h2>

             <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base text-justify">
             Immerse yourself in the dynamic universe of anime through Spirited Score, where our dedicated team of discerning critics crafts detailed reviews that go beyond the surface. With a focus on narrative intricacies, character development, and artistic nuances, we dissect each series to offer comprehensive insights. Whether you are a seasoned otaku or a newcomer to the anime realm, Spirited Score is your trusted companion, guiding you through the diverse landscape of this captivating art form. Uncover the essence of every show, explore the cultural richness, and embark on a journey of discovery with our meticulously curated reviews and recommendations.
           </p>
        </div>
    </div>

    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <Image height={400} width={400}
         className="object-cover w-full h-full max-w-2xl rounded-md" 
         src="/header.png"
        alt="Anime Photo"/>
    </div>
</div>
    {session ? (
          <> name = {session.user.name}<br/>
      username = {session.user.username}<br/>
      email = {session.user.email}<br/>
      role = {session.user.role}
      </>
  ): null
}

    </div>
  </>
  )
}
