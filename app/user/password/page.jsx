'use client'
import { PassSchema } from '@/yupschema';
import { useFormik } from 'formik';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Passwordchange() {
    const { data: session } = useSession()
    const router = useRouter()
    const userid = session?.user?.id

    const [showPassword, setShowPassword] = useState(false);
    const [newshowPassword, setnewShowPassword] = useState(false);
    const [coshowPassword, setcoShowPassword] = useState(false);

    const postapi = async (ogvalues) => {

        const response = await fetch(`/api/user/password/${userid}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(ogvalues),
        });

        if (response.status === 400) {
            const data = await response.json();
            toast.error(data.message);
            throw new Error(data.message);
        }

        router.refresh();
    };


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                oldpassword: '',
                newpassword: '',
                confirmpassword: ''
            },
            validationSchema: PassSchema,
            onSubmit: (async (values, action) => {

                toast.promise((postapi(values)), {
                    pending: "updating Profile",
                    success: "Profile Updated Successfully",
                    error: "Failed To Update Profile"
                });
                action.resetForm();
            }
            ),
        });


    return (
        <div className='px-2 mx-auto max-w-[1500px] pt-20 min-h-screen flex items-center'>
            <div className=' w-[25rem] mx-auto p-6 mt-0 m-3 bg-white dark:bg-slate-700 border dark:border-slate-500 rounded-md shadow-md'>
                <span className='mb-4 block text-base font-semibold text-purple-700 dark:text-purple-400'>
                    Password Change
                </span>
                {session && session.user ? (
                    <>
                        <h2 className='mb-4 text-[32px] font-bold text-dark lg:text-[4xl]'>
                            {session.user.username}
                        </h2>

                        <form onSubmit={handleSubmit} autoComplete='off'>
                                
                            <div className='mb-2'>
                                <div className="relative">

                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className={`border ${errors.oldpassword && touched.oldpassword
                                        ? 'border-red-400 dark:border-red-600 placeholder-red-600/50'
                                        : ' dark:border-gray-600'
                                    } px-[14px] py-3 border-stroke bg-white dark:bg-slate-800 flex items-center rounded focus:ring-0 focus:outline-0 w-full`}
                                    placeholder={'Old Password'}
                                    name='oldpassword'
                                    value={values.oldpassword}
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

                                {errors.oldpassword && touched.oldpassword ? (
                                    <p className='text-red-600 dark:text-red-500 text-sm'>
                                        * {errors.oldpassword}
                                    </p>
                                ) : <p className='pb-5'></p>}
                            </div>

                            <div className='mb-2'>
                                <div className="relative">

                                <input
                                    type={newshowPassword ? 'text' : 'password'}
                                    className={`border ${errors.newpassword && touched.newpassword
                                        ? 'border-red-400 dark:border-red-600 placeholder-red-600/50'
                                        : ' dark:border-gray-600'
                                    } px-[14px] py-3 border-stroke bg-white dark:bg-slate-800 flex items-center rounded focus:ring-0 focus:outline-0 w-full`}
                                    placeholder={'New Password'}
                                    name='newpassword'
                                    value={values.newpassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                    <div
                          className={` absolute top-0  right-3 h-full flex items-center text-slate-400`}
                          onClick={() => setnewShowPassword(!newshowPassword)}
                        >
                          {newshowPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
                        </div>
                                    </div>

                                {errors.newpassword && touched.newpassword ? (
                                    <p className='text-red-600 dark:text-red-500 text-sm'>
                                        * {errors.newpassword}
                                    </p>
                                ) : <div className='pb-5'></div>}
                            </div>

                            <div className='mb-2'>
                                <div className="relative">
                                <input
                                    type={coshowPassword ? 'text' : 'password'}
                                    className={`border ${errors.confirmpassword && touched.confirmpassword
                                        ? 'border-red-400 dark:border-red-600 placeholder-red-600/50'
                                        : ' dark:border-gray-600'
                                        } px-[14px] py-3 border-stroke bg-white dark:bg-slate-800 flex items-center rounded focus:ring-0 focus:outline-0 w-full`}
                                    placeholder={'Confirm Password'}
                                    name='confirmpassword'
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
                                    <p className='text-red-600 dark:text-red-500 text-sm'>
                                        * {errors.confirmpassword}
                                    </p>
                                ) : <div className='pb-5'></div>}
                            </div>

                            
                            <button
                                type='submit'
                                className='rounded border border-primary bg-primary px-7 py-2 transition hover:bg-opacity-90 dark:hover:bg-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500 bg-purple-600 dark:bg-purple-500 dark:border-gray-500 text-white'
                            >
                                Update
                            </button>
                        </form>
                    </>
                ) : null}
            </div>
        </div>
    );
}