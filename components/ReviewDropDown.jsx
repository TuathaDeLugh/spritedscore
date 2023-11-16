"use client"
import Link from "next/link";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";

export default function ReviewDropDown() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
      setOpen(!open);
  };
  let ddata =
  ['Action', 'Advanture', 'Comedy', 'Drama', 'Ecchi', 'Fantasy', 'Horror', 'Isekai', 'Mystery', 'Romance', 'Sci-fi', 'Sport', 'slice_of_life', 'shonan', 'Seinen', 'Suspense', 'super_natural'];


    
  return (
         <div className="relative">
            <button onClick={handleOpen} className='border border-gray-300 dark:border-gray-500 rounded-full p-1'><CiFilter size={25}/></button>
            {open ? (
                <ul className="mt-6 z-10 absolute right-0 list-none m-1 border overflow-y-auto max-h-60 md:max-h-96 dark:border-slate-700 w-ma md:w-40 rounded bg-white/70 dark:bg-slate-900/70">
                    
                    {ddata.map((link) => {
                        return (
                            <li key={link}
                            className="text-l rounded-lg text-slate-800 dark:text-slate-300 p-1 m-2 text-center md:text-left hover:bg-purple-400    hover:text-slate-50 md:dark:hover:text-slate-200">

                                <Link onClick={() => setOpen(!open)} href={`/allreview/filter/${link}`} className='p-1 w-full'>
                                    {link}</Link>
                            </li>

)
})}
                    
                </ul>
            ) : null}
        </div>
  )
}
