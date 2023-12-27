"use client"
import { toast } from 'react-toastify';
import React, { useState } from 'react'
import { useFormik } from "formik";
import { signIn, useSession } from 'next-auth/react'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SignupSchema } from '@/yupschema';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

let initialValues = {
  name: "",
  username: "",
  email: "",
  pass: "",
  avatar: "",
  confirmpassword: "",
  provider: "email"
};

export default function Register() {
  const [disabled, setDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [coshowPassword, setcoShowPassword] = useState(false);
  const router = useRouter();

  const postapi = async (ogvalues) => {
    await fetch(`/api/user`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(ogvalues),
    });
    router.refresh();
    router.push("/login");
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: (async (values, action) => {

      try {
        const response = await fetch(`/api/validateusername?username=${values.username}`);
        const { isUsernameTaken } = await response.json();

        if (isUsernameTaken) {
          toast.error('Username is already taken.');
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

  const { data: session } = useSession()
  if (session && !session.role) {
    router.push('Googlelogin')
  }
  if (session && session.role) {
    router.push("/")
  }
  else {
    return (


      <section className=" bg-slate-100 dark:bg-gray-800 py-20 lg:py-0 min-h-screen flex items-center">
        <div className="container m-auto ">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white dark:bg-slate-800 border shadow-lg dark:border-slate-600 dark:shadow-gray-900 px-10 py-10 sm:px-12 md:px-[60px]">

                <div className="mb-2 md:mb-3">
                  <Link
                    href="/"
                    className="mx-auto flex"
                  >
                    <h2 className="text-2xl text-purple-700 font-bold dark:text-purple-400 m-auto">SPIRITED SCORE</h2>
                  </Link>
                </div>
                <h2 className="text-center text-2xl font-semibold dark:text-purple-400 m-auto mb-6">Create An Account</h2>
                <form className=' overflow-y-auto' onSubmit={handleSubmit} autoComplete="off">
                  <input
                    className={`${errors.name && touched.name ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "border-stroke"} w-full rounded-md border  bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white`}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                  {errors.name && touched.name ? (
                    <p className=" text-red-600 text-sm mb-2">* {errors.name}</p>
                  ) : (<div className='mb-6' />)}
                  <input
                    className={`${errors.username && touched.username ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "border-stroke"} w-full rounded-md border  bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white`}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                  {errors.username && touched.username ? (
                    <p className=" text-red-600 text-sm mb-2">* {errors.username}</p>
                  ) : (<div className='mb-6' />)}
                  <input
                    className={`${errors.email && touched.email ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "border-stroke"} w-full rounded-md border  bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white`}

                    type="text"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                  {errors.email && touched.email ? (
                    <p className=" text-red-600 text-sm mb-2">* {errors.email}</p>
                  ) : (<div className='mb-6' />)}


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

                  <div className="mb-3">
                    <input
                      disabled={disabled}
                      type="submit"
                      value="Sign Up"
                      className="w-full bg-purple-600 dark:bg-purple-400 cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white dark:border-gray-500 transition hover:bg-opacity-90 dark:hover:bg-opacity-70"
                    />
                  </div>
                </form>
                <p className="mb-3 text-center text-base text-secondary-color dark:text-dark-7">
                  OR
                </p>
                <div className="mb-3">
                  <button
                    onClick={() => signIn('google', { callbackUrl: '/googleSignup' })}
                    className="w-full flex h-11 items-center gap-2 justify-center rounded-md border dark:border-gray-500 hover:bg-slate-700 hover:text-white  px-5"
                  >
                    <p>Continue With</p> <FcGoogle size={25} />
                  </button>
                </div>
                <p className="text-base text-center text-body-color dark:text-dark-6">
                  <span className="pr-0.5">Already have Account?</span>
                  <Link
                    href="/login"
                    className="text-primary hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
