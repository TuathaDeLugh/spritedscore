"use client"
import Image from 'next/image';
import { useFormik } from "formik";
import React from 'react'
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react'
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import Link from 'next/link';
export default function Login() {

  const initialValues = {
    email: "",
    password: "",
  };
  const router = useRouter();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      // validationSchema: loginSchema,
      onSubmit: (async (values, action) => {

        try {
          const result = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
          })
          console.log(result)
          if (
            result &&
            (result).status == 200 &&
            (result).error == undefined
          ) {
            toast.success('loged in successful');
            router.refresh();
            router.push('/')
          } else {
            toast.error('incorrect username or password')
          }
        } catch (error) {
        //   alert('failed to login')
          console.log('Login Failed:', error)
        }

        action.resetForm();

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
                  <Image src="/logo.png" height={60} width={70}/>
                  <h2 className=" text-2xl md:text-4xl text-purple-700 font-bold dark:text-purple-400 m-auto">SPIRITED SCORE</h2>
                </a>
              </div>
              <h2 className="text-center text-2xl md:text-3xl font-semibold dark:text-purple-400 m-auto mb-6">log In to your Account</h2>
              <form onSubmit={handleSubmit} autoComplete="off">

                <input 
          className=" mb-6 w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white"
                type="text"
                 name="email" 
                 placeholder="Email"
                 value={values.email}
                 onChange={handleChange}
                 onBlur={handleBlur}
                  />

                <input
          className=" mb-6 w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="mb-6">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full bg-purple-600 dark:bg-purple-400 cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white dark:border-gray-500 transition hover:bg-opacity-90 dark:hover:bg-opacity-70"
                  />
                </div>
              </form>
              <p className="mb-6 text-center text-base text-secondary-color dark:text-dark-7">
                OR
              </p>
              <div className="mb-6">
                <button
                    onClick={() => signIn('google', { callbackUrl: '/googleSignup' })}
                    className="w-full flex h-11 items-center gap-2 justify-center rounded-md border dark:border-gray-500 hover:bg-slate-700 hover:text-white  px-5"
                  >
                    <p>Continue With</p> <FcGoogle size={25}/>
                  </button>
              </div>
              <p className="text-base text-center text-body-color dark:text-dark-6">
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
