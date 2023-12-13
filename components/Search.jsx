import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
export default function Search() {
  return (
    <>
    <form className='relative flex items-center w-full'>
        <input type="text" placeholder='Search' className='relative inline-block rounded-full bg-transparent border border-stroke border-slate-400/50 pl-3 pr-11 py-2 w-full  focus:border-purple-500 focus:outline-none ease-in-out' />
        <button type='submit' className='rounded-full bg-purple-500 p-2 absolute m-1 right-0 text-white' ><FaMagnifyingGlass size={20} /></button>
    </form>
    </>
  )
}
