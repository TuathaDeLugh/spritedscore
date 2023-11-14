"use client"
import { Suspense, useState } from 'react';
import getAllReviews from '@/controller/allreview';
import Link from 'next/link';
import React from 'react';
import { BsFilter } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default async function AllReviews() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isFilterOpen, setFilterOpen] = useState(false);
    const reviews = await getAllReviews();
    console.log(reviews);
    const handleCategoryChange = (category) => {
        setSelectedCategories((prevSelected) =>
            prevSelected.includes(category)
                ? prevSelected.filter((cat) => cat !== category)
                : [...prevSelected, category]
        );
    };

    const isCategorySelected = (category) => selectedCategories.includes(category);

    const filteredReviews = selectedCategories.length
        ? reviews.filter((review) =>
            review.category.some((cat) => selectedCategories.includes(cat))
        )
        : reviews;

    const clearAllCategories = () => {
        setSelectedCategories([]);
    };

    return (
        <section className="px-2 mx-auto max-w-[1500px] md:pt-20 pt-16">
            <div className="container px-6 py-5 mx-auto">
                <span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
                    All Reviews
                </span>
                <h2 className="mb-6 text-[32px] font-bold capitalize text-dark lg:text-[4xl]">
                    Unlock the essence of every anime with Spirited Score&apos;s insightful reviews
                </h2>

                {/* Category filter */}


                


                    <button
                        className="border border-purple-500 text-purple-500 px-4 py-2 rounded-full mb-2"
                        onClick={() => setFilterOpen(!isFilterOpen)}
                    >
                        {isFilterOpen == true ? <AiOutlineClose size={20}/>:<BsFilter size={20}/> }
                    </button>
                    {/* Selected categories display */}
                    {selectedCategories.length > 0 && (
                        <>
                            {selectedCategories.map((category) => (
                                <span
                                    key={category}
                                    className="inline-block bg-purple-500 text-white px-2 my-1 py-1 rounded-full ml-2"
                                >
                                    {category}
                                </span>
                            ))}
                            <button
                                className="ml-2 text-sm text-purple-500 hover:underline focus:outline-none"
                                onClick={clearAllCategories}
                            >
                                Clear All
                            </button>
                        </>
                    )}
                
                {/* Category filter section */}
                {isFilterOpen && (
                    <div className="mb-6 border  p-3 rounded-xl dark:border-gray-600 ">
                        <div className="flex space-x-3 items-center flex-wrap">
                            {['Action', 'Adventure', 'Comedy', 'Drama', 'Ecchi', 'Fantasy', 'Horror', 'Isekai', 'Mystery', 'Romance', 'Sci-fi', 'Sport', 'Slice of Life', 'Shonan', 'Seinen', 'Suspense', 'Super Natural'].map((category) => (
                                <button
                                    key={category}
                                    className={`flex items-center px-3 py-1 rounded-full my-1 ${isCategorySelected(category) ? 'bg-purple-500 text-white' : 'bg-white text-gray-500 dark:bg-gray-800 dark:text-gray-400'}`}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                )}



                <Suspense fallback={<p>Loading...</p>}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
                        {
                            filteredReviews ? (<>{

                                filteredReviews.map((review) => {
                                    return (
                                        <Link
                                            href={`/allreview/${review._id}`}
                                            key={review._id}
                                            className="flex items-end overflow-hidden bg-cover rounded-lg h-96 border border-slate-200 dark:border-slate-600 hover:scale-105  hover:border-purple-500 dark:hover:border-purple-400  ease-in-out duration-300"
                                            style={{ backgroundImage: `url(${review.image})` }}
                                        >
                                            <div className="w-full px-4 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                                                    {review.title}
                                                </h2>
                                                <p className="mt-2 text-lg tracking-wider text-purple-500 uppercase dark:text-purple-400 ">
                                                    &#9733; {review.rating}/10
                                                </p>
                                            </div>
                                        </Link>
                                    );
                                })
                            }</>) : (
                                <p>No data available.</p>
                            )}
                    </div>
                </Suspense>
            </div>
        </section>
    );
}




