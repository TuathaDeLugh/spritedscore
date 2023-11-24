"use client"
import { ProfileSchema } from '@/yupschema';
import { Formik, useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function EditProfile({ userdata }) {

  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  const handleOpen = () => {
    setDisabled(!disabled);
  };
  const postapi = async (ogvalues) => {
      await fetch(`/api/user/${userdata._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(ogvalues),
      });
      router.refresh();
      router.push("/");

  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: userdata.username,
        name: userdata.name,
        email: userdata.email,
        avatar: userdata.avatar
      },
      validationSchema : ProfileSchema,
      onSubmit: (async (values, action) => {
        setDisabled(true);
        toast.promise((postapi(values)), {
          pending: "updating Profile",
          success: "Profile Updated Successfully",
          error: " Failed To Update"
        });
        action.resetForm();
        
      }
      ),
    });
  return (<>
    <div className='flex items-center w-full mb-5'>

  {
    userdata.avatar ? (<Image width={100} height={100} src={userdata.avatar} alt={userdata.uername} className='rounded-full mx-auto border dark:border-slate-500'/>) : null
  }
  </div>
  <div className="flex justify-between w-full  items-baseline">

      <button
        onClick={handleOpen}
        className="mb-5 rounded border border-primary bg-primary p-2 transition  hover:bg-opacity-90 dark:hover:bg-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500 bg-purple-600 dark:bg-purple-500 dark:border-gray-500  text-white"
        >
        {disabled ? "wana update?" : "cancel"}
      </button>
      {userdata.provider === "google" ?  null : (
      <Link href={""} className='hover:underline hover:text-purple-500'>Change Password</Link>)}
        </div>
  {
    disabled ? (
      <>
      <div className='mb-6'>
        <p
          className={`w-full rounded border border-stroke  dark:border-gray-700  px-[14px] py-3 text-base bg-white dark:bg-slate-800/50`}
          >
            <span className='inline-block w-2/6'>username :</span> <span className='inline-block 4/6'>{userdata.username}</span>
        </p>
      </div>
      <div className='mb-6'>
        <p
          className={`dark:border-gray-700 w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800/50 `}>
            <span className='inline-block w-2/6'>Name :</span> <span className='inline-block 4/6'>{userdata.name}</span>
        </p>
      </div>
      <div className='mb-6'>
        <p
          className={`dark:border-gray-700 w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800/50 `}
          >
            <span className='inline-block w-2/6'>Email :</span> <span className='inline-block 4/6'>{userdata.email}</span>
        </p>
      </div>
      </>
    ):
    (
      <>
    <form onSubmit={handleSubmit} autoComplete="off">
    <div className='mb-6'>
    <div className={`border ${errors.username && touched.username ? "border-red-400 dark:border-red-600" : "dark:border-gray-600"} border-stroke bg-white dark:bg-slate-800 flex items-center rounded`}>
  <p className="px-3 text-gray-600 dark:text-gray-300 text-base w-2/6">username</p>
  <input
    className={`w-4/6 rounded px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none`}
    placeholder={userdata.username}
    name='username'
    value={values.username}
    onChange={handleChange}
    onBlur={handleBlur}
  />
</div>


        {errors.username && touched.username ? (
          <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.username}</p>
        ) : null}
      </div>
      
      <div className='mb-6'>
      <div className={`border ${errors.name && touched.name ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : " dark:border-gray-600"} border-stroke bg-white dark:bg-slate-800 flex items-center rounded `}>

      <p className="px-3 text-gray-600 dark:text-gray-300 text-base w-2/6">Name</p>
        <input
          className={` w-4/6 rounded  px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none`}
          placeholder={userdata.name}
          name='name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </ div>


        {errors.name && touched.name ? (
          <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.name}</p>
        ) : null}
      </div>

      <div className='mb-6'>
      <div className={`border ${errors.email && touched.email ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : " dark:border-gray-600"} border-stroke bg-white dark:bg-slate-800 flex items-center rounded `}>

      <p className="px-3 text-gray-600 dark:text-gray-300 text-base w-2/6">Email</p>
        <input
          disabled={userdata.provider=="google"? true : false}
          className={` w-4/6 rounded  px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none disabled:opacity-50`}
          placeholder={userdata.email}
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </ div>
      {userdata.provider === "google" ? (<p className=" text-red-600 dark:text-red-500 text-sm">You can&apos;t update email because you logged in using Google</p>) : null}

        {errors.email && touched.email ? (
          <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.email}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="rounded border border-primary bg-primary px-7 py-2 transition  hover:bg-opacity-90 dark:hover:bg-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500 bg-purple-600 dark:bg-purple-500 dark:border-gray-500  text-white"
      >
        Update
      </button>

  
    </form>
    </>)}
    
  </>
  )
}
