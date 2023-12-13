"use client"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CiFilter } from "react-icons/ci";

export default function ReviewDropDown() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    let ddata = ['Action', 'Adventure', 'Comedy', 'Drama', 'Ecchi', 'Fantasy', 'Harem', 'Horror', 'Isekai', 'Mystery', 'Romance', 'Sci-fi', 'Sport', 'slice_of_life', 'shonen', 'Seinen', 'Suspense', 'super_natural'];

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={handleOpen} className='border border-gray-300 dark:border-gray-500 rounded-full p-1'>
                <CiFilter size={25} />
            </button>
            {open ? (
                <ul className="mt-6 z-10 absolute right-0 list-none m-1 border overflow-y-auto max-h-60 md:max-h-96 dark:border-slate-700 w-max  rounded bg-white/80 dark:bg-slate-900/80">
                    <li key={"all"} className="text-l rounded-lg text-slate-800 dark:text-slate-300 p-1 m-2 text-left hover:bg-purple-400 hover:text-slate-50 md:dark:hover:text-slate-200">
                        <Link onClick={() => setOpen(!open)} href={`/allreview`} className='inline-block px-1 w-full'>
                            {"All"}
                        </Link>
                    </li>
                    {ddata.map((link) => (
                        <li key={link} className="text-l rounded-lg text-slate-800 dark:text-slate-300 p-1 m-2 text-left hover:bg-purple-400 hover:text-slate-50 md:dark:hover:text-slate-200">
                            <Link onClick={() => setOpen(!open)} href={`/allreview/filter/${link}`} className='inline-block px-1 w-full capitalize'>
                                {link.split('_').join(' ')}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}
