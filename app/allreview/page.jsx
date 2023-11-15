import FatchAllreview from '@/components/pages/FatchAllreview';
// import ReviewDropDown from '@/components/reviewDropDown';


export default async function AllReviews() {
   

    
    return (
        <section className="px-2 mx-auto max-w-[1500px] md:pt-20 pt-16">
            <div className="container px-6 py-5 mx-auto">
            <span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
          All reviews
        </span>
        <h2 className="mb-6 text-[32px] font-bold capitalize text-dark lg:text-[4xl] flex justify-between">
        Unlock The Essence Of Every Anime With Spirited Score&apos;s Insightful Reviews
                    {/* <ReviewDropDown/> */}
        </h2>
                   <FatchAllreview/>
            </div>
        </section>
    );
}




