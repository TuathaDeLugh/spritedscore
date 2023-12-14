"use client"
import { ProfileSchema } from '@/yupschema';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import AvatarModel from '../AvatarChangeModel';
import { useSession } from 'next-auth/react';
import { AiOutlineUser } from 'react-icons/ai';

export default function EditProfile({ userdata }) {

  const { data: session, update } = useSession();
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  const handleOpen = () => {
    setDisabled(!disabled);
  };
  const postapi = async (ogvalues) => {
    try {
      const response = await fetch(`/api/user/${userdata._id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(ogvalues),
      });
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      const { updatedUser } = await response.json();

      await update({
        ...session,
        user: {
          username: updatedUser.username,
          name: updatedUser.name,
          email: updatedUser.email
        }
      })

    } catch (error) {
      console.error('Error updating profile:', error.message);
      toast.error('Failed to update profile');
    }
    router.refresh();
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: userdata.username,
        name: userdata.name,
        email: userdata.email,
        avatar: userdata.avatar
      },
      validationSchema: ProfileSchema,
      onSubmit: (async (values, action) => {
        if (values.username == userdata.username) {
          setDisabled(true);
          toast.promise((postapi(values)), {
            pending: "updating Profile",
            success: "Profile Updated Successfully",
            error: " Failed To Update"
          });
          action.resetForm();
        }
        else {
          try {
            const response = await fetch(`/api/validateusername?username=${values.username}`);
            const { isUsernameTaken } = await response.json();

            if (isUsernameTaken) {
              toast.error('Username is already taken.');
            } else {
              setDisabled(true);
              toast.promise((postapi(values)), {
                pending: "updating Profile",
                success: "Profile Updated Successfully",
                error: " Failed To Update"
              });
              action.resetForm();
            }
          } catch (error) {
            console.error('Error validating username:', error);
          }
        }
      }
      ),
    });
  return (<>

    <div className=' flex items-center  w-full mb-5'>
      <div className="mx-auto relative ">
        <div className='absolute right-5 top-0 w-1 h-1' >
          <AvatarModel userId={userdata._id} />
        </div>
        {
          userdata.avatar ? (<Image width={100} height={100} src={userdata.avatar} alt={userdata.uername} className='mx-auto rounded-full  border dark:border-slate-500' />) : (<AiOutlineUser size={100} className=' p-2 mx-auto rounded-full text-slate-600 dark:text-slate-500  border dark:border-slate-500' />)
        }

      </div>
    </div>
    <div className="flex justify-between w-full  items-baseline">

      <button
        onClick={handleOpen}
        className="mb-5 rounded border border-primary bg-primary p-2 transition  hover:bg-opacity-90 dark:hover:bg-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500 bg-purple-600 dark:bg-purple-500 dark:border-gray-500  text-white"
      >
        {disabled ? "wana update?" : "cancel"}
      </button>
      {userdata.provider === "google" ? null : (
        <Link href={'/user/password'} className='hover:underline hover:text-purple-500'>Change Password</Link>)}
    </div>
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className='mb-6'>
        <div className={`border ${errors.username && touched.username ? "border-red-400 dark:border-red-600" : "dark:border-gray-600"} border-stroke bg-white dark:bg-slate-800 flex items-center rounded`}>
          <p className="px-3 text-gray-600 dark:text-gray-300 text-base w-2/6">username</p>
          <input
            disabled={disabled}
            className={`w-4/6 rounded px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none disabled:opacity-50`}
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
            className={` w-4/6 rounded  px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none disabled:opacity-50`}
            placeholder={userdata.name}
            name='name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={disabled}
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
            disabled={(userdata.provider == "google" ? true : false) || disabled}
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
      {
        !disabled ?
          (

            <button
              type="submit"
              className="rounded border border-primary bg-primary px-7 py-2 transition  hover:bg-opacity-90 dark:hover:bg-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500 bg-purple-600 dark:bg-purple-500 dark:border-gray-500  text-white"
            >
              Update
            </button>
          ) : null
      }


    </form>

  </>
  )
}
