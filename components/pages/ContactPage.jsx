"use client";
import React, { useState } from 'react'
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { emailSchema } from '@/yupschema';


function ContactPage({name,email}) {
  


    const initialValues = {
      fullname: name,
      email: email,
      subject: "",
      details: "",
    };

  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  const postapi = async (ogvalues) => {
    await fetch(`/api/email`, {
      method: "POST",
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
      initialValues,
      validationSchema: emailSchema,
      onSubmit: (async (values, action) => {
        setDisabled(true);
        toast.promise((postapi(values)), {
          pending: "Sending Message To Umang Sailor",
          success: "Message Sent Successfully",
          error: " Failed To Send"
        });
        action.resetForm();

      }
      ),
    });

  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
      <div className="relative rounded-lg bg-slate-50 p-8 shadow-lg dark:bg-slate-800 sm:p-12 border dark:border-slate-600">
      <form onSubmit={handleSubmit} autocomplete="off">
          <div className='mb-6'>

            <input
              className={`${errors.fullname && touched.fullname  ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "dark:border-gray-600"} w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none`}
              placeholder='Your Name'
              name='fullname'
              value={values.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fullname && touched.fullname ? (
              <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.fullname}</p>
            ) : null}
          </div>
          <div className='mb-6'>

            <input
              className={`${errors.email && touched.email ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "dark:border-gray-600"} w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none`}
              placeholder='Email'
              type="text"
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.email}</p>
            ) : null}
          </div>
          <div className='mb-6'>

            <input
              className={`${errors.subject && touched.subject ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "dark:border-gray-600"} w-full rounded border border-stroke px-[14px] py-3 text-base bg-white dark:bg-slate-800 focus:outline-none`}
              placeholder='Subject'
              name='subject'
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.subject && touched.subject ? (
              <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.subject}</p>
            ) : null}
          </div>
          <div className='mb-6'>

            <textarea
              className={`${errors.details && touched.details ? "border-red-400 dark:border-red-600 placeholder-red-600/50" : "dark:border-gray-600"} w-full resize-none rounded border border-stroke px-[14px] py-3 text-base  outline-none bg-white dark:bg-slate-800 `}
              rows="6"
              name='details'
              value={values.details}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Details'
            ></textarea>
            {errors.details && touched.details ? (
              <p className=" text-red-600 dark:text-red-500 text-sm">* {errors.details}</p>
            ) : null}
          </div>
          <div>
            <button
              type="submit"
              disabled={disabled} 
              className="w-full rounded border border-primary bg-primary p-3 transition  hover:bg-opacity-90 dark:hover:bg-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500 bg-purple-600 dark:bg-purple-500 dark:border-gray-500  text-white"
            >
              Send Message
            </button>
          </div>
        </form>
        <div>
          <span className="absolute -right-9 -top-10 z-[-1]">
            <svg
              width={100}
              height={100}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                fill="#3056D3"
              />
            </svg>
          </span>
          <span className="absolute -right-10 top-[90px] z-[-1]">
            <svg
              width={34}
              height={134}
              viewBox="0 0 34 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="31.9993"
                cy={132}
                r="1.66667"
                transform="rotate(180 31.9993 132)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 31.9993 117.333)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 31.9993 102.667)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={88}
                r="1.66667"
                transform="rotate(180 31.9993 88)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 31.9993 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={45}
                r="1.66667"
                transform="rotate(180 31.9993 45)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={16}
                r="1.66667"
                transform="rotate(180 31.9993 16)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={59}
                r="1.66667"
                transform="rotate(180 31.9993 59)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 31.9993 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 31.9993 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={132}
                r="1.66667"
                transform="rotate(180 17.3333 132)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 17.3333 117.333)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 17.3333 102.667)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={88}
                r="1.66667"
                transform="rotate(180 17.3333 88)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 17.3333 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={45}
                r="1.66667"
                transform="rotate(180 17.3333 45)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={16}
                r="1.66667"
                transform="rotate(180 17.3333 16)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={59}
                r="1.66667"
                transform="rotate(180 17.3333 59)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 17.3333 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 17.3333 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={132}
                r="1.66667"
                transform="rotate(180 2.66536 132)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 2.66536 117.333)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 2.66536 102.667)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={88}
                r="1.66667"
                transform="rotate(180 2.66536 88)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 2.66536 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={45}
                r="1.66667"
                transform="rotate(180 2.66536 45)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={16}
                r="1.66667"
                transform="rotate(180 2.66536 16)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={59}
                r="1.66667"
                transform="rotate(180 2.66536 59)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 2.66536 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 2.66536 1.66665)"
                fill="#13C296"
              />
            </svg>
          </span>
          <span className="absolute -bottom-7 -left-7 z-[-1]">
            <svg
              width={107}
              height={134}
              viewBox="0 0 107 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="104.999"
                cy={132}
                r="1.66667"
                transform="rotate(180 104.999 132)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 104.999 117.333)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 104.999 102.667)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy={88}
                r="1.66667"
                transform="rotate(180 104.999 88)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 104.999 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy={45}
                r="1.66667"
                transform="rotate(180 104.999 45)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy={16}
                r="1.66667"
                transform="rotate(180 104.999 16)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy={59}
                r="1.66667"
                transform="rotate(180 104.999 59)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 104.999 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="104.999"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 104.999 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy={132}
                r="1.66667"
                transform="rotate(180 90.3333 132)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 90.3333 117.333)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 90.3333 102.667)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy={88}
                r="1.66667"
                transform="rotate(180 90.3333 88)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 90.3333 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy={45}
                r="1.66667"
                transform="rotate(180 90.3333 45)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy={16}
                r="1.66667"
                transform="rotate(180 90.3333 16)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy={59}
                r="1.66667"
                transform="rotate(180 90.3333 59)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 90.3333 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="90.3333"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 90.3333 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy={132}
                r="1.66667"
                transform="rotate(180 75.6654 132)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={132}
                r="1.66667"
                transform="rotate(180 31.9993 132)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 75.6654 117.333)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 31.9993 117.333)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 75.6654 102.667)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 31.9993 102.667)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy={88}
                r="1.66667"
                transform="rotate(180 75.6654 88)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={88}
                r="1.66667"
                transform="rotate(180 31.9993 88)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 75.6654 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 31.9993 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy={45}
                r="1.66667"
                transform="rotate(180 75.6654 45)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={45}
                r="1.66667"
                transform="rotate(180 31.9993 45)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy={16}
                r="1.66667"
                transform="rotate(180 75.6654 16)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={16}
                r="1.66667"
                transform="rotate(180 31.9993 16)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy={59}
                r="1.66667"
                transform="rotate(180 75.6654 59)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy={59}
                r="1.66667"
                transform="rotate(180 31.9993 59)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 75.6654 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 31.9993 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="75.6654"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 75.6654 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="31.9993"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 31.9993 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy={132}
                r="1.66667"
                transform="rotate(180 60.9993 132)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={132}
                r="1.66667"
                transform="rotate(180 17.3333 132)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 60.9993 117.333)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 17.3333 117.333)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 60.9993 102.667)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 17.3333 102.667)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy={88}
                r="1.66667"
                transform="rotate(180 60.9993 88)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={88}
                r="1.66667"
                transform="rotate(180 17.3333 88)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 60.9993 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 17.3333 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy={45}
                r="1.66667"
                transform="rotate(180 60.9993 45)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={45}
                r="1.66667"
                transform="rotate(180 17.3333 45)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy={16}
                r="1.66667"
                transform="rotate(180 60.9993 16)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={16}
                r="1.66667"
                transform="rotate(180 17.3333 16)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy={59}
                r="1.66667"
                transform="rotate(180 60.9993 59)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy={59}
                r="1.66667"
                transform="rotate(180 17.3333 59)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 60.9993 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 17.3333 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="60.9993"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 60.9993 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="17.3333"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 17.3333 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy={132}
                r="1.66667"
                transform="rotate(180 46.3333 132)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={132}
                r="1.66667"
                transform="rotate(180 2.66536 132)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 46.3333 117.333)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 2.66536 117.333)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 46.3333 102.667)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 2.66536 102.667)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy={88}
                r="1.66667"
                transform="rotate(180 46.3333 88)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={88}
                r="1.66667"
                transform="rotate(180 2.66536 88)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 46.3333 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 2.66536 73.3333)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy={45}
                r="1.66667"
                transform="rotate(180 46.3333 45)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={45}
                r="1.66667"
                transform="rotate(180 2.66536 45)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy={16}
                r="1.66667"
                transform="rotate(180 46.3333 16)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={16}
                r="1.66667"
                transform="rotate(180 2.66536 16)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy={59}
                r="1.66667"
                transform="rotate(180 46.3333 59)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy={59}
                r="1.66667"
                transform="rotate(180 2.66536 59)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 46.3333 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 2.66536 30.6666)"
                fill="#13C296"
              />
              <circle
                cx="46.3333"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 46.3333 1.66665)"
                fill="#13C296"
              />
              <circle
                cx="2.66536"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 2.66536 1.66665)"
                fill="#13C296"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ContactPage