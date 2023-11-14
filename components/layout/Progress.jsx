"use client"
import React, { useEffect, useState } from 'react'

export default function Progress() {
    const [progress,setProgress] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setProgress((preProgress)=>
            preProgress >= 100 ? 0 : preProgress + 10)
        },500)
        return()=>{
            clearInterval(interval);
        }
    },[])
    return (
        
    <>
    <div className='loadingContainer fixed top-[63px] md:top-[70px] bg-transparent h-1 w-full z-50'>
        <div className='loadingBar h-full bg-purple-600 ease-in-out duration-500' style={{width:`${progress}%`}}></div>
    </div>
    <div className='flex space-x-2 justify-center items-center h-screen animate-pulse'>
 	<span className='sr-only'>Loading...</span>
  	<div className='h-8 w-8 dark:bg-purple-400 bg-purple-600  rounded-full animate-bounce  [animation-delay:-0.3s]'></div>
	<div className='h-8 w-8 dark:bg-purple-400 bg-purple-600 rounded-full animate-bounce  [animation-delay:-0.15s]'></div>
	<div className='h-8 w-8 dark:bg-purple-400 bg-purple-600 rounded-full animate-bounce '></div>
</div>
    </>
  )
}
