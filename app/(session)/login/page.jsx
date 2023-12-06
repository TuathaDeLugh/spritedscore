"use client"
import Image from 'next/image';
import { useFormik } from "formik";
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react'
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { loginSchema } from '@/yupschema';
export default function Login() {
  const [disabled, setDisabled] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const router = useRouter();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (async (values, action) => {

        try {
          const result = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
          })
          if (
            result &&
            (result).status == 200 &&
            (result).error == undefined
          ) {
            router.refresh();
            router.push('/')
          } else {
            toast.error('incorrect username or password')
          }
        } catch (error) {
          console.log('Login Failed:', error)
        }

        action.resetForm();

      }
      ),
    });


  return (
    <section className=" bg-slate-100 dark:bg-gray-800 py-20 lg:py-[120px] h-screen flex items-center">
      <div className="container m-auto ">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white dark:bg-slate-800 border shadow-lg dark:border-slate-600 dark:shadow-gray-900 px-10 py-10 sm:px-12 md:px-[60px]">
              <div className="mb-6 md:mb-8">
                <a
                  href="/#"
                  className="mx-auto flex"
                >
                  <Image src="/logo.png" height={60} width={70} alt='logo'/>
                  <h2 className=" text-2xl md:text-4xl text-purple-700 font-bold dark:text-purple-400 m-auto">SPIRITED SCORE</h2>
                </a>
              </div>
              <h2 className="text-center text-2xl md:text-3xl font-semibold dark:text-purple-400 m-auto mb-6">log In to your Account</h2>
              <form onSubmit={handleSubmit} autoComplete="off">
                <input 
            className= {`${errors.email&& touched.email ?  "border-red-400 dark:border-red-600 placeholder-red-600/50" : "border-stroke"} w-full rounded-md border  bg-transparent px-5 py-3 text-base  outline-none  focus-visible:shadow-none dark:border-gray-500 dark:text-white`}
          type="text"
          name="email" 
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          />
                {errors.email && touched.email ? (
                  <p className=" text-red-600 text-sm mb-2">* {errors.email}</p>
                  ) : (<div className='mb-6' />)}
                  

                <input
            className={`${errors.password && touched.password ? "border-red-400 dark:border-red-600  placeholder-red-600/50" : "border-stroke"} w-full rounded-md border bg-transparent px-5 py-3 text-base  outline-none  focus-visible:shadow-none dark:border-gray-500 dark:text-white`}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                <p className=" text-red-600 text-sm mb-2">* {errors.password}</p>
              ) : (<div className='mb-6' />)}
                <div className="mb-6">
                  <input
                  disabled={disabled}
                    type="submit"
                    value="Sign In"
                    className={`w-full bg-purple-600 dark:bg-purple-400 cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white dark:border-gray-500 transition hover:bg-opacity-90 dark:hover:bg-opacity-70`}
                  />
                </div>
              </form>
              <p className="mb-6 text-center text-base text-secondary-color dark:text-dark-7">
                OR
              </p>
              <div className="mb-6">
                <button
                    onClick={() => signIn('google', { callbackUrl: '/Googlelogin' })}
                    className="w-full flex h-11 items-center gap-2 justify-center rounded-md border dark:border-gray-500 hover:bg-slate-700 hover:text-white  px-5"
                  >
                    <p>Continue With</p> <FcGoogle size={25}/>
                  </button>
              </div>
              
              <p className="text-base text-center  dark:text-dark-6">
                <span className="pr-0.5">Not a member yet?</span>
                <Link
                  href="/register"
                  className="text-primary hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
