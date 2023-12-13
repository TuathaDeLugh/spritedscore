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

                            <h2 className="mb-2 text-3xl font-bold leading-none text-purple-600 dark:text-purple-400 md:text-[40px] lg:text-[60px]">
                                {errorMessage}
                            </h2>
                            <h2 className="mb-3 text-xl md:text-2xl font-semibold leading-tight text-gray-900 dark:text-slate-300">
                                Looks like you&apos;ve lost the doorway
                            </h2>
                            <div className="flex items-center justify-center gap-2">

                                <button onClick={reset}
                                    className="inline-block rounded-lg border border-slate-700 dark:border-slate-400  px-8 py-3 text-center text-base font-semibold text-gray-900 dark:text-white transition hover:bg-purple-500 dark:hover:bg-purple-400 hover:text-white"

                                >Try Again</button>
                                <a
                                    href="/"
                                    className="inline-block rounded-lg border border-slate-700 dark:border-slate-400  px-8 py-3 text-center text-base font-semibold text-gray-900 dark:text-white transition hover:bg-purple-500 dark:hover:bg-purple-400 hover:text-white"
                                >
                                    Go To Home
                                </a>
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