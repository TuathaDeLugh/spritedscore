'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function Passwordchange() {
    const { data: session } = useSession()
    console.log(session)
    return (
        <div className='px-2 mx-auto max-w-[1500px] pt-20 min-h-screen flex items-center'>
            <div className=" w-auto lg:w-[25rem] mx-auto p-6 mt-0 m-3 bg-white dark:bg-slate-700 border dark:border-slate-500 rounded-md shadow-md">
                <span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
                    Password Change
                </span>
                {
                    session && session.user ? (
                        <>
                            <h2 className="mb-6 text-[32px] font-bold text-dark lg:text-[4xl]">
                                {session.user.username}
                            </h2>

                            <form onSubmit={''} autoComplete="off">
                                <div className='mb-6'>
                                    <div className={`border ${errors.username && touched.username ? "border-red-400 dark:border-red-600" : "dark:border-gray-600"} border-stroke bg-white dark:bg-slate-800 flex items-center rounded`}>
                                        <p className="px-3 text-gray-600 dark:text-gray-300 text-base w-2/6">username</p>
                                        <input
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
                                            className={` w-4/6 rounded  px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none disabled:opacity-50`}
                                            placeholder={userdata.email}
                                            name='email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </ div>
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

                        </>

                    ) : null
                }

            </div>
        </div>
    )
}
