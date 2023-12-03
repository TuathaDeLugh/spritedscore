"use client"
import Link from 'next/link';
import { signOut } from "next-auth/react";
import { AiOutlineUser } from "react-icons/ai";
import { useSession } from "next-auth/react"
import React from 'react'
import Image from 'next/image';

function AuthLinks({ navinfo }) {

    const [open, setOpen] = React.useState(false);
    const { data: session } = useSession()


    let dropdata =
        [
            { name: 'Login', path: '/login', key: 1 },
            { name: 'Register', path: '/register', key: 2 }];
    if (session && session.user && session.user.role === "user") {

        dropdata = [
            { name: 'Profile', path: '/user', key: 1 },
            { name: 'My review', path: '/user/review', key: 2 },
            { name: 'WatchList', path: '/user/watchlist', key: 3 }]
    }
    if (session && session.user && session.user.role === "admin") {
        dropdata = [
            { name: 'Admin Panal', path: '/admin', key: 1 },
            { name: 'Profile', path: '/user', key: 2 },
            { name: 'Manage review', path: '/user/review', key: 3 },
            { name: 'WatchList', path: '/user/watchlist', key: 4 }
        ]
    }
    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)} className='border border-gray-300 dark:border-gray-500 rounded-full p-[1px]'>{session && session.user && session.user.avatar ? (<Image src={session.user.avatar} height={25} width={25} alt='Img' className='rounded-full'/>):(<AiOutlineUser size={24}/>)}</button>
            {open ? (
                <ul className="mt-6 relative md:absolute md:-right-7 list-none m-1 border dark:border-slate-700 w-full md:w-40 rounded bg-white/70 dark:bg-slate-900/70">
                    {session && session.user && session.user.username ?(
                        <>
                        <li className="text-l text-slate-800 dark:text-slate-300 p-1 m-2 text-center md:text-left">
                    <p className='p-1'>{session.user.username}</p>
                    </li>
                    <hr className='border-1 dark:border-slate-600'/>
                        </>
                    ):null
                    }
                    {dropdata.map((link) => {
                        return (
                            <li key={link.key} onClick={navinfo}
                                className="text-l rounded-lg text-slate-800 dark:text-slate-300 p-1 m-2 text-center md:text-left hover:bg-purple-400    hover:text-slate-50 md:dark:hover:text-slate-200">

                                <Link onClick={() => setOpen(!open)} href={link.path} className='inline-block px-1 w-full'>
                                    {link.name}</Link>
                            </li>

                        )
                    })}
                    {session && session.user && session.user.username ? (
                        <li
                            className="text-l rounded-lg text-red-400 border border-red-400 p-1 m-2 text-center hover:bg-red-400   hover:text-slate-50 md:dark:hover:text-slate-200"

                        >


                            <button onClick={() => signOut({callbackUrl:'/'})}>
                                Log Out
                            </button>
                        </li>
                    ) : null}
                </ul>
            ) : null}
        </div>
    )
}

export default AuthLinks



