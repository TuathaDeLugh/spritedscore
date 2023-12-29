import React, { Suspense } from 'react';
import ReviewDropDown from '@/components/ReviewDropDown';
import FatchReviewCat from '@/components/pages/FatchReviewCat';
import SkelReview from '@/components/layout/SkelReview';

export default function FilteredReviews(context) {
    return (
        <section className="px-2 mx-auto max-w-[1500px]">
            <div className="container px-6 py-5 mx-auto">
                <span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
                    Filtered reviews
                </span>
                <div className="flex items-center flex-row gap-5 justify-between mb-6 ">

                    <h2 className="text-[32px] font-bold capitalize lg:text-[4xl] ">
                    Category : {context.params.category.split('_').join(' ')}
                    </h2>
                        <ReviewDropDown />





                </div>
               
                <Suspense fallback={<SkelReview />}>
                    <FatchReviewCat category={context.params.category} page={parseInt(context.searchParams.page) || 1} />
                </Suspense>
            </div>
        </section>
    );
}




