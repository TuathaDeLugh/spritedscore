"use client"
import React, { Suspense, useEffect, useRef, useState , useCallback} from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import SearchedData from './logic/SearchedData';
export default function Search() {
  const [data, setData] = useState('');
  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);

  const handleOutClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target) && data.trim() !== '') {
      setOpen(false);
    }
  }, [data]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutClick);
    return () => {
      document.removeEventListener('mousedown', handleOutClick);
    };
  }, [handleOutClick, data]);

  const handleChange = (value) => {
    setData(value);
    setOpen(value.trim() !== '');
  };

  return (
    <>
      <div className="w-full" ref={searchRef}>
        <div className="relative flex items-center w-full">
          <input
            type="text"
            placeholder="Search"
            className="relative inline-block rounded-full bg-transparent border border-stroke border-slate-400/50 pr-3 pl-11 py-2 w-full  focus:border-purple-500 focus:outline-none ease-in-out"
            onChange={(e) => handleChange(e.target.value)}
          />
          <div type="submit" className="rounded-full bg-purple-500 p-2 absolute m-1 text-white">
            <FaMagnifyingGlass size={20} />
          </div>
        </div>
        {open ? (
          <div className="relative">
            <div className="absolute mt-3 z-10 left-0 border dark:border-slate-600 w-full rounded-lg p-3 pr-1 bg-slate-50/80  dark:bg-slate-800/80">
              <Suspense fallback={<div className='w-full items-center text-center'> Loading</div>}>
                <SearchedData query={data} />
              </Suspense>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}