import FatchAllreview from '@/components/pages/FatchAllreview';
import React, { Suspense } from 'react';
import ReviewDropDown from '@/components/ReviewDropDown';
import SkelReview from '@/components/layout/SkelReview';
import Search from '@/components/Search';

export default function AllReviews(context) {


    return (
        <section className="px-2 mx-auto max-w-[1500px] md:pt-20 pt-16">
            <div className="container px-6 py-5 mx-auto">
                <span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
                    All reviews
                </span>
                <div className="flex items-center flex-col lg:flex-row gap-5 justify-between mb-6 ">

                    <h2 className="text-[32px] font-bold capitalize lg:text-[4xl] ">
                        Unlock The Essence Of Anime With Spirited Score&apos;s Insightful Reviews
                    </h2>
                    <div className="w-full lg:w-80 flex gap-2 items-center">
                        <Search />
                        <ReviewDropDown />
                    </div>






                </div>


                <Suspense fallback={<SkelReview />}>
                    <FatchAllreview context={context} />
                </Suspense>
            </div>
        </section>
    );
}