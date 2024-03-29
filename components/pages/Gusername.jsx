"use client"
import Image from 'next/image';
import { useFormik } from "formik";
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import { UsernameSchema } from '@/yupschema';
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const initialValues = {
  username: "",
  pass:"",
  confirmpassword:""
};
export default function Gusername() {
  const [disabled, setDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [coshowPassword, setcoShowPassword] = useState(false);
  const router = useRouter();
  const { data: session } = useSession()

  const postapi = async (ogvalues) => {
    setDisabled(true);
    const data = {
      name: session.user.name,
      username: ogvalues.username,
      email: session.user.email,
      pass:ogvalues.pass,
      provider: "google",
      avatar: session.user.image,
    }
    console.log(data)
     const response = await fetch(`/api/user`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to create user: ${response.statusText}`);
    }
    signOut({ callbackUrl: '/login' })
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: UsernameSchema,
    onSubmit: (async (values, action) => {

      try {
        const response = await fetch(`/api/validateusername?username=${values.username}`);
        const { isUsernameTaken } = await response.json();

        if (isUsernameTaken) {
          toast.error('Username is already taken.');
          values.username=''
        } else {
          toast.promise(postapi(values), {
            pending: 'Creating Account',
            success: 'Account Created Successfully now you can login',
            error: 'Failed to create Account',
          });
          action.resetForm();
          setDisabled(false);
          router.refresh();
        }
      } catch (error) {
        console.error('Error validating username:', error);
      }

    }
    ),
  });
  return (
    <section className=" bg-slate-100 dark:bg-slate-800 py-20 lg:py-[120px] h-screen flex items-center">
      <div className="container m-auto ">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white dark:bg-slate-900 px-10 py-10 sm:px-12 md:px-[60px]">
              <div className="mb-6 md:mb-8">
                <a
                  href="/#"
                  className="mx-auto flex"
                >
                  <Image src="/logo.png" height={60} width={70} alt='logo' />
                  <h2 className=" text-2xl md:text-4xl text-purple-700 font-bold dark:text-purple-400 m-auto">SPIRITED SCORE</h2>
                </a>
              </div>
              <div className="p-2 border rounded-lg border-slate-400  text-sm bg-red-400/50  m-auto mb-6"><p> No Account Found With This Email <u>{session?.user?.email}</u>.</p>
               Please Enter Unique username & login again </div>
              <form onSubmit={handleSubmit} autoComplete="off">


                <input
                  className={`${errors.username && touched.username ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "border-stroke"} w-full rounded-md border  bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white`}
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username && touched.username ? (
                  <p className=" text-red-600 text-sm mb-2">* {errors.username}</p>
                ) : (<p className='mb-6' />)}

<div className="relative">
                    <input
                      className={`${errors.pass && touched.pass ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "border-stroke"} w-full rounded-md border  bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white`}


                      type={showPassword ? 'text' : 'password'}
                      name="pass"
                      placeholder="Password"
                      value={values.pass}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div
                      className={` absolute top-0  right-3 h-full flex items-center text-slate-400`}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
                    </div>
                  </div>
                  {errors.pass && touched.pass ? (
                    <p className=" text-red-600 text-sm mb-2">* {errors.pass}</p>
                  ) : (<div className='mb-6' />)}
                  <div className="relative">

                    <input
                      className={`${errors.confirmpassword && touched.confirmpassword ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "border-stroke"} w-full rounded-md border  bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white`}

                      type={coshowPassword ? 'text' : 'password'}
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      value={values.confirmpassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div
                      className={` absolute top-0  right-3 h-full flex items-center text-slate-400`}
                      onClick={() => setcoShowPassword(!coshowPassword)}
                    >
                      {coshowPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
                    </div>
                  </div>
                {errors.confirmpassword && touched.confirmpassword ? (
                  <p className=" text-red-600 text-sm mb-2">* {errors.confirmpassword}</p>
                ) : (<div className='mb-6' />)}
                <div className="mb-6">
                  <input
                    disabled={disabled}
                    type="submit"
                    value="Create Account"
                    className={`w-full bg-purple-600 dark:bg-purple-400 cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white dark:border-gray-500 transition hover:bg-opacity-90 dark:hover:bg-opacity-70`}
                  />
                </div>
              </form>
                  <p className='text-center'>
                    Want to use 
                    <button className=' ml-2 text-purple-500 hover:underline ' onClick={() => signOut({ callbackUrl: '/login' })}>  
                      diffrent account
                      </button>  
                    </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
