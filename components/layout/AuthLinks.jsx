"use client"
import Link from 'next/link';
import React from 'react'
import { AiOutlineUser } from "react-icons/ai";

export default function AuthLinks({navclose}) {
  let dropData = [
    { name: 'Login', path: '/login'  ,key:1},
    { name: 'Register', path: '/register' ,key:2},]
    // dropData = [
    // { name: 'Profile', path: '/user/profile'  ,key:1},
    // { name: 'My review', path: '/user' ,key:2},
    // { name: 'WatchList', path: '/user/watchlist' ,key:3},
    // { name: 'logout', path: '/' ,key:4},]
     // dropData = [
        // { name: 'Admin Panal', path: '/admin' ,key:2},
        // { name: 'Profile', path: '/user'  ,key:1},
        // { name: 'Manage review', path: '/' ,key:2},
        // { name: 'WatchList', path: '/' ,key:3},
        // { name: 'logout', path: '/' ,key:4},]
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      <button onClick={handleOpen} className='border border-gray-500 rounded-full p-1'><AiOutlineUser size={20}/></button>
      {open ? (
        <ul className="mt-6 relative md:absolute md:-right-7 list-none m-1 border dark:border-slate-700 w-full md:w-40 rounded backdrop-blur bg-white/50 dark:bg-slate-900/50">
          {dropData.map((link) => {
              return (
                <li key={link.key} onClick={navclose} className="text-l rounded-lg text-slate-800 dark:text-slate-300 p-1 m-2 text-center md:text-left hover:bg-purple-400    hover:text-slate-50 md:dark:hover:text-slate-200">

                  <Link onClick={() => setOpen(!open)} href={link.path} className='p-1'>{link.name}</Link>
                </li>
              )
            })}
        </ul>
      ) : null}
    </div>
  );
}

