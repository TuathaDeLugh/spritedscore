import HomeLetestReview from '@/components/pages/HomeLetestReview'
import HomePopulerReview from '@/components/pages/HomePopulerReview'
import Image from 'next/image'
import Link from 'next/link'

const categorylink = [{
  link:"Action",
  color:"bg-red-500/70"
},
{
  link:"Comedy",
  color:"bg-stone-600/70"
},
{
  link:"Drama",
  color:"bg-lime-600/70"
},
{
  link:"Fantasy",
  color:"bg-sky-600/70"
},
{
  link:"Romance",
  color:"bg-rose-800/70"
},
{
  link:"Sport",
  color:"bg-cyan-800/70"
},
{
  link:"slice_of_life",
  color:"bg-violet-700/70"
},
{
  link:"Shonen",
  color:"bg-emerald-700/70"
},
{
  link:"Suspense",
  color:"bg-blue-700/70"
}]

export default async function Home() {
  return (

    <div className='px-2 mx-auto max-w-[1500px] md:pt-20 pt-16'>
      <div className="container flex flex-col justify-between px-6 md:px-0 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
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
            alt="Anime Photo" />
        </div>
      </div>

      <div className="container mx-auto flex-wrap gap-6 flex justify-center p-3">
        {
          categorylink?.map((link) => {
            return (
              <Link key={link.link} className={`w-[27%] lg:w-[15%] xl:w-[7%] lg:grow capitalize text-center inline-block rounded-lg py-2 ${link.color}  hover:opacity-80 text-white`} href={`/allreview/filter/${link.link}`}>{link.link}</Link>

            )
          })
      }
      </div>
      <div className="container px-6 md:px-0 py-3 mx-auto flex flex-wrap">
        <div className="w-full md:w-2/3 md:pr-5">
        <HomeLetestReview/>
        </div>
        <div className=" md:border-l dark:border-gray-500 md:pl-5 w-full md:w-1/3">
        <HomePopulerReview/>
        </div>

      </div>
    </div>
  )
}
