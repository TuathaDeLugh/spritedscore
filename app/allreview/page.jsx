import React from 'react'

export default function AllReviews() {
    const backgroundImage = [
        {
            link: "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"

            , name: "This is title",
            start: "8"
        },
        {
            link: "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"

            , name: "This is title",
            start: "8"
        },
        {
            link: "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"

            , name: "This is title",
            start: "8"
        },
        {
            link: "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            , name: "This is title",
            start: "8"
        }, {
            link: "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"

            , name: "This is title",
            start: "8"
        },
    ]

    return (

        <section class="px-2 mx-auto max-w-[1500px] md:pt-20 pt-16">
            <div class="container px-6 py-5 mx-auto">
            <span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
                All Reviews
              </span>
              <h2 className="mb-6 text-[32px] font-bold capitalize text-dark lg:text-[4xl]">
              Unlock the essence of every anime with Spirited Score&apos;s insightful reviews
              </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
                    {backgroundImage.map((image) => {
                        return (

                            <div key={image.name} class="flex items-end overflow-hidden bg-cover rounded-lg h-96 border border-slate-200 dark:border-slate-600 hover:scale-105  hover:border-purple-500 dark:hover:border-purple-400  ease-in-out duration-300"
                                style={{ backgroundImage: `url(${image.link})` }}
                            >
                                <div class="w-full px-4 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                    <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{image.name}</h2>
                                    <p class="mt-2 text-lg tracking-wider text-purple-500 uppercase dark:text-purple-400 ">{image.start}/10</p>
                                </div>
                            </div>
                        )
                    }
                    )}

                </div>
            </div>
        </section>
    )
}
