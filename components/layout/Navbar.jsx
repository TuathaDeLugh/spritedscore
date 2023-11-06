"use client"
import { signOut } from "next-auth/react";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import {dropdata} from './AuthLinks'

export default function Navbar() {
    let navData = [
        { name: 'Home', path: '/'  ,key:1},
        { name: 'All Review', path: '/allreview' ,key:2},
        { name: 'About', path: '/about' ,key:3},
        { name: 'contact', path: '/contact' ,key:4},]
        const [navbar, setNavbar] = useState(false);
        const [open, setOpen] = React.useState(false);

        const handleOpen = () => {
          setOpen(!open);
        };
  return (
    <nav className="w-full backdrop-blur bg-white/50 dark:bg-slate-800/50 dark:shadow-slate-700 fixed top-0 left-0 right-0 z-50 shadow-sm">
    <div className="justify-between px-4 mx-auto lg:max-w-screen-2xl md:items-center md:flex md:px-8">
      <div>
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          {/* LOGO */}
          <Link href="/" className='flex'>
            {/* <Image src="/logo.png" height="30" width="50" className='md:hidden rounded-full bg-white block'/> */}
            <h2 className="text-2xl text-purple-700 font-bold dark:text-purple-400">SPIRITED SCORE</h2>
          </Link>
          {/* HAMBURGER BUTTON FOR MOBILE */}

          <div className="md:hidden ">
            <button
              className="p-2 text-purple-500  rounded-md outline-none"
              onClick={() => setNavbar(!navbar)}
              >
              {navbar ? (
                
                <AiOutlineClose size={'25'} 
                />
                ) : (
                  <GiHamburgerMenu size={'25'}
                  />
                  )}
            </button>
          </div>
        </div>
      </div>
        
      <div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
        }`}
        >
          <ul className="h-screen md:h-auto items-center justify-center md:flex ">

            {navData.map((link) => {
              return (
                <li key={link.key} className="text-l text-slate-800 dark:text-slate-300 py-5 px-5 text-center  border-b-2 md:border-b-0  border-slate-400  md:hover:text-purple-700 md:dark:hover:text-purple-400 md:hover:bg-transparent">

                  <Link onClick={() => setNavbar(!navbar)} href={link.path}>{link.name}</Link>
                </li>
              )
            })}
            <li className="text-l text-slate-800 dark:text-slate-300 py-5 px-5 text-center  border-b-2 md:border-b-0  border-slate-400">
              {/* <AuthLinks navclose={() => setNavbar(!navbar)}/> */}
              <div className="relative">
      <button onClick={handleOpen} className='border border-gray-500 rounded-full p-1'><AiOutlineUser size={20}/></button>
      {open ? (
        <ul className="mt-6 relative md:absolute md:-right-7 list-none m-1 border dark:border-slate-700 w-full md:w-40 rounded backdrop-blur bg-white/50 dark:bg-slate-900/50">
          {dropdata.map((link) => {
              return (
                <li key={link.key} onClick={() => setNavbar(!navbar)} 
                className="text-l rounded-lg text-slate-800 dark:text-slate-300 p-1 m-2 text-center md:text-left hover:bg-purple-400    hover:text-slate-50 md:dark:hover:text-slate-200">

                  <Link onClick={() => setOpen(!open)} href={link.path} className='p-1'>{link.name}</Link>
                </li>
              )
            })}
            <li
                className="text-l rounded-lg text-slate-800 dark:text-slate-300 p-1 m-2 text-center md:text-left hover:bg-purple-400    hover:text-slate-50 md:dark:hover:text-slate-200"
            
            >

            <button 
                onClick={() => signOut({ callbackUrl: '/' })}>
                  Logout</button>
                </li>
        </ul>
      ) : null}
    </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}
