import Search from '@/components/Search'
import HomePageskel from '@/components/layout/HomePageskel'
import HomeLetestReview from '@/components/pages/HomeLetestReview'
import HomePopulerReview from '@/components/pages/HomePopulerReview'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

const categorylink = [
	{
		link: 'Action',
		color: 'bg-red-500/70',
	},
	{
		link: 'Comedy',
		color: 'bg-stone-600/70',
	},
	{
		link: 'Drama',
		color: 'bg-lime-600/70',
	},
	{
		link: 'Fantasy',
		color: 'bg-sky-600/70',
	},
	{
		link: 'Romance',
		color: 'bg-rose-800/70',
	},
	{
		link: 'Sport',
		color: 'bg-cyan-800/70',
	},
	{
		link: 'slice_of_life',
		color: 'bg-violet-700/70',
	},
	{
		link: 'shonan',
		color: 'bg-emerald-700/70',
	},
	{
		link: 'Suspense',
		color: 'bg-blue-700/70',
	},
]
export default async function Home() {
	return (
		<div className='px-2 mx-auto max-w-[1500px]'>
			<div className='container flex flex-col justify-between px-6 md:px-0 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center gap-6'>
				<div className='flex flex-col items-center flex-1 lg:flex-row'>
					<div className='lg:mx-2 lg:order-2'>
						<h2 className='text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl mb-5'>
							Dive into the captivating world of anime with{' '}
							<span className='text-purple-600 dark:text-purple-400'>
								Spirited Score
							</span>
						</h2>
						<Search/>
						<p className='mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base text-justify'>
							Immerse yourself in the dynamic universe of anime through Spirited
							Score, where our dedicated team of discerning critics crafts
							detailed reviews that go beyond the surface. With a focus on
							narrative intricacies, character development, and artistic
							nuances, we dissect each series to offer comprehensive insights.
							Whether you are a seasoned otaku or a newcomer to the anime realm,
							Spirited Score is your trusted companion, guiding you through the
							diverse landscape of this captivating art form. Uncover the
							essence of every show, explore the cultural richness, and embark
							on a journey of discovery with our meticulously curated reviews
							and recommendations.
						</p>
					</div>
				</div>

				<div className='flex items-center lg:justify-end flex-1 h-96 grow justify-center '>
					<Image
						height={400}
						width={400}
						className='object-cover w-full h-full max-w-2xl rounded-md'
						src='/header.png'
						alt='Anime Photo'
					/>
				</div>
			</div>

			<div className='container mx-auto flex-wrap gap-6 flex justify-center p-3'>
				{categorylink?.map(link => {
					return (
						<Link
							key={link.link}
							className={`w-[27%] lg:w-[15%] xl:w-[7%] lg:grow capitalize text-center inline-block rounded-lg py-2 ${link.color}  hover:opacity-80 text-white`}
							href={`/allreview/filter/${link.link}`}
						>
							{link.link.split('_').join(' ')}
						</Link>
					)
				})}
			</div>
			<Suspense fallback={<HomePageskel/>}>
			<div className='container px-6 md:px-0 py-3 mx-auto flex flex-wrap items-start'>
				<div className='w-full md:w-2/3 md:pr-5 sticky top-5'>
					
					<HomeLetestReview />
					
				</div>
				<div className='md:border-l dark:border-gray-500 md:pl-5 w-full md:w-1/3'>
      				<HomePopulerReview />
				</div>
			</div>
			</Suspense>
		</div>
	)
}
