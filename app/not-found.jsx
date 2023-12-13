"use client"
import Link from "next/link";
import React from "react";

export default function Error() {
  return (
    <>
      <section className="relative z-10 bg-slate-100 dark:bg-gray-800 h-[100vh] flex items-center">
        <div className="container mx-auto">
          <div className=" flex">
            <div className="w-full px-4 my-40">
              <div className="mx-auto text-center">
                <h2 className="mb-2 text-6xl font-bold leading-none text-purple-600 dark:text-purple-400 sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h2 className="mb-3 text-3xl font-semibold leading-tight text-gray-900 dark:text-white">
                Looks like you've found the doorway to the great nothing
                </h2>
                <a
                  href="/"
                  className="inline-block rounded-lg border boreder-black dark:border-white  px-8 py-3 text-center text-base font-semibold text-gray-900 dark:text-white transition hover:bg-white dark:hover:bg-gray-800 hover:text-primary"
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
      </section>
    </>
  );
};
