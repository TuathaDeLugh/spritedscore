"use client"
import Image from 'next/image';
import React from 'react'
import { signIn } from 'next-auth/react'
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
export default function page() {
  return (
    <section className=" bg-slate-100 dark:bg-slate-800 py-20 lg:py-[120px] h-screen">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white dark:bg-slate-900 px-10 py-16 sm:px-12 md:px-[60px]">
              <div className="mb-10 md:mb-12">
                <a
                  href="/#"
                  className="mx-auto flex"
                >
                  <Image src="/logo.png" height={60} width={70}/>
                  <h2 className=" text-2xl md:text-4xl text-purple-700 font-bold dark:text-purple-400 m-auto">SPIRITED SCORE</h2>
                </a>
              </div>
              <form>

                <InputBox type="email" name="email" placeholder="Email" />

                <InputBox
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full bg-purple-600 dark:bg-purple-400 cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white dark:border-gray-500 transition hover:bg-opacity-90 dark:hover:bg-opacity-70"
                  />
                </div>
              </form>
              <p className="mb-6 text-center text-base text-secondary-color dark:text-dark-7">
                Continue With
              </p>
              <div className="-mx-2 mb-12 flex justify-around">
                <button
                    onClick={() => signIn('google', { callbackUrl: '/googleSignup' })}
                    className="flex h-11 items-center  justify-center rounded-md border dark:border-gray-500 hover:bg-slate-700 px-5"
                  >
                    <FcGoogle size={25}/>
                  </button>
                <button
                    onClick={() => signIn('google', { callbackUrl: '/googleSignup' })}
                    className="flex h-11 items-center  justify-center rounded-md border dark:border-gray-500 hover:bg-slate-700 px-5"
                  >
                    <BiLogoFacebook className='text-blue-500' size={25}/>
                  </button>
                  <button
                    onClick={() => signIn('google', { callbackUrl: '/googleSignup' })}
                    className="flex h-11 items-center  justify-center rounded-md border dark:border-gray-500 hover:bg-slate-700 px-5"
                  >
                    <AiFillGithub size={25}/>
                  </button>
              </div>
              <p className="text-base text-center text-body-color dark:text-dark-6">
                <span className="pr-0.5">Not a member yet?</span>
                <a
                  href="/#"
                  className="text-primary hover:underline"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const InputBox = ({ type, placeholder, name }) => {
    return (
      <div className="mb-6">
        {/* <p className=' capitalize font-semibold px-2 py-1'>{name}</p> */}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white"
        />
      </div>
    );
  };