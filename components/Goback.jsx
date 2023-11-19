"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoMdArrowBack } from "react-icons/io";

export default function Goback() {
    const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
<button
      onClick={handleGoBack}
      className="group flex items-center space-x-2 p-2 rounded-lg hover:bg-purple-500 dark:hover:bg-purple-400 hover:mr-4 ease-in-out duration-300"
    >
      <IoMdArrowBack size={23} className=" text-purple-500 group-hover:text-white" />
      <span className="hidden group-hover:inline-block text-white">Go Back</span>
    </button>  )
}
