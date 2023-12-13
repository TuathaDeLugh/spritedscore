'use client'
import Image from "next/image";


const ErrorComponent = ({ error, reset }) => {
    const errorMessage = error instanceof Error ? error.message : "Something Wrong";
    return ( <>
    <div class="min-h-screen lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div class="w-full xl:w-1/2 relative pb-12 lg:pb-0">
                            <h1 class="my-2 text-purple-500 dark:text-purple-400 font-bold text-4xl">
                                {errorMessage}
                            </h1>
                            <p class="my-2 text-gray-800 dark:text-slate-200">Sorry about that! Please visit our hompage to get where you need to go.</p>
                            <button onClick={reset} className=" m-2 border rounded-lg md py-4 px-8 text-center bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-opacity-50" >Try Again</button>
                            <a href={'/'} class=" m-2 border rounded-lg md py-4 px-8 text-center bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-opacity-50">Take me home!</a>
                        
            </div>
            <div>
                <Image width={600} height={600} className="dark:invert dark:hue-rotate-180" alt="not" src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div></> );
}
 
export default ErrorComponent;