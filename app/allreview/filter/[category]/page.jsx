import React, { Suspense} from 'react';
import ReviewDropDown from '@/components/reviewDropDown';
import FatchReviewCat from '@/components/pages/FatchReviewCat';


export default function FilteredReviews({ params: { category } }) {
    
    return (
        <section className="px-2 mx-auto max-w-[1500px] md:pt-20 pt-16">
            <div className="container px-6 py-5 mx-auto">
            <span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
          Filtered reviews
        </span>
        <div className="flex items-center justify-between">

        <h2 className="mb-6 text-[32px] font-bold capitalize text-dark lg:text-[4xl] ">
        Category : {category}
        </h2>

                    <ReviewDropDown/>

        
        
        
        
            </div>
            <Suspense fallback={<>loading</>}>
                   <FatchReviewCat category={category}/>
            </Suspense>
            </div>
        </section>
    );
}




