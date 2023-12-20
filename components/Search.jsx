"use client"
import React, { Suspense, useEffect, useRef, useState, useCallback } from 'react'
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

  const handleInputClick = () => {
    if (data.trim() !== '') {
      setOpen(true);
    }
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
            onClick={handleInputClick}

          />
          <div type="submit" className="rounded-full bg-purple-500 p-2 absolute m-1 text-white">
            <FaMagnifyingGlass size={20} />
          </div>
        </div>
        {open ? (
          <div className="relative ">
            <div className="absolute mt-3 z-10 left-0 border dark:border-slate-600 w-full rounded-lg p-3 pr-1 bg-slate-50/90  dark:bg-slate-800/90">
              <Suspense fallback={
                <div className="flex overflow-y-auto pr-2">
                  <div className="flex gap-2 flex-wrap w-full">
                    {
                      Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex w-full items-center p-2 border border-slate-300 dark:border-slate-500 rounded-md animate-pulse duration-300">
                          <div className="w-20 h-20 mr-2 object-cover border dark:border-slate-500 bg-slate-200 dark:bg-slate-700 rounded" />
                          <div className='grow'>
                            <h2 className="font-semibold p-3 mb-2 w-[95%] rounded-full bg-slate-300 dark:bg-slate-600"></h2>
                            <p className="text-gray-400 p-2 w-16 rounded-full bg-slate-300 dark:bg-slate-600"></p>
                          </div>
                        </div>
                      ))
                    }


                  </div>
                </div>
              }>
                <SearchedData query={data} />
              </Suspense>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}