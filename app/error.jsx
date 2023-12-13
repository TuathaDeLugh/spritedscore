'use client'
import Image from "next/image";


const ErrorComponent = ({ error, reset }) => {
    const errorMessage = error instanceof Error ? error.message : "Something Wrong";
    return (<>
        <section className="relative z-10 bg-slate-100 dark:bg-gray-800 h-[100vh] flex items-center">
            <div className="container mx-auto">
                <div className=" flex">
                    <div className="w-full px-4 my-40">
                        <div className="mx-auto text-center">
                            
                            <h2 className="mb-2 text-6xl font-bold leading-none text-purple-600 dark:text-purple-400 sm:text-[60px] md:text-[80px]">
                            {errorMessage}
                </h2>
                <h2 className="mb-3 text-2xl font-semibold leading-tight text-gray-900 dark:text-slate-300">
                Looks like you've lost the doorway
                </h2>
                <div className="flex items-center justify-center gap-2">

                                        <button onClick={reset} className=" border rounded-lg md py-3 px-8 text-center bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-opacity-50" >Try Again</button>
                                        <a href={'/'} class="border rounded-lg md py-3 px-4 text-center bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-opacity-50">Take me home!</a>
                                    </div>

                        </div>
                    </div>
                </div>

                <div className=" absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
                    <div className="h-full w-1/3 bg-gradient-to-t from-[#3b3b3b14] to-[#C4C4C400] dark:from-[#FFFFFF14] dark:to-[#C4C4C400]"></div>
                    <div className="flex h-full w-1/3">
                        <div className="h-full w-1/2 bg-gradient-to-b from-[#00000014] dark:from-[#FFFFFF14] dark:to-[#C4C4C400]"></div>
                        <div className="h-full w-1/2 bg-gradient-to-t from-[#00000014] dark:from-[#FFFFFF14] dark:to-[#C4C4C400]"></div>
                    </div>
                    <div className="h-full w-1/3 bg-gradient-to-b from-[#00000014] dark:from-[#FFFFFF14] dark:to-[#C4C4C400]"></div>
                </div>
            </div>
        </section>
    </>);
}

export default ErrorComponent;