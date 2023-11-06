"use client"
import Image from 'next/image';
import { toast } from 'react-toastify';
import React, { useState } from 'react'
import { useFormik } from "formik";
import { signIn } from 'next-auth/react'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import bcrypt from "bcryptjs";

const initialValues = {
  name: "",
  username: "",
  avatar: "",
  email: "",
  pass: "",
  confirmpassword: ""
};

export default function page() {
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  const postapi = async (ogvalues) => {
    const hashedpassword = await bcrypt.hash(values.pass, 10);
    const data = {
      name: ogvalues.name,
      username: ogvalues.username,
      email: ogvalues.email,
      avatar: ogvalues.avatar,
      password: hashedpassword 
     }
    await fetch(`/api/user`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    router.refresh();
    router.push("/login");
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    // validationSchema: emailSchema,
    onSubmit: (async (values, action) => {
      
     setDisabled(true);
      toast.promise((postapi(values)), {
        pending: "Creating Account",
        success: "Account Created Successfully",
        error: " Failed to create Account"
      });
      action.resetForm();

    }
    ),
  });
  return (
    <section className=" bg-slate-100 dark:bg-slate-800 py-20 lg:py-[120px]  flex items-center">
      <div className="container m-auto ">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white dark:bg-slate-900 px-10 py-10 sm:px-12 md:px-[60px]">
              <div className="mb-2 md:mb-3">
                <a
                  href="/#"
                  className="mx-auto flex"
                >
                  {/* <Image src="/logo.png" height={30} width={40}/> */}
                  <h2 className="text-2xl text-purple-700 font-bold dark:text-purple-400 m-auto">SPIRITED SCORE</h2>
                </a>
              </div>
              <h2 className="text-center text-2xl font-semibold dark:text-purple-400 m-auto mb-6">Create An Account</h2>
              <form className=' overflow-y-auto' onSubmit={handleSubmit} autoComplete="off">
                <input 
          className="mb-4 w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white"

                type="text" 
                name="name" 
                placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                <input 
          className="mb-4 w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white"

                type="text" 
                name="username" 
                placeholder="Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                <input
          className="mb-4 w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white"

                type="text" 
                name="email" 
                placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                <input 
          className="mb-4 w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white"

                type="text" 
                name="avatar" 
                placeholder="Avatar"
                  value={values.avatar}
                  onChange={handleChange}
                  onBlur={handleBlur} />

                <input
          className="mb-4 w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white"

                  type="password"
                  name="pass"
                  placeholder="Password"
                  value={values.pass}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <input
          className="mb-4 w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-gray-500 dark:text-white"

                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  value={values.confirmpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
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
  );
};