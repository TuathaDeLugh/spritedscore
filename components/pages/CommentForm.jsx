"use client"
import { useFormik } from 'formik';
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';
import { IoAddSharp } from "react-icons/io5";

export default function CommentForm({ reviewid }) {
  const router = useRouter();
  const { data: session } = useSession()
  const initialValues = {
    _id:"",
    username: "",
    useravatar:"",
    comment: "",
  };
  const postapi = async (ogvalues) => {
    await fetch(`/api/review/comment/${reviewid}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(ogvalues),
    });
    router.refresh();

  }
  const { values,handleChange, handleSubmit } =
  useFormik({
    initialValues,
    onSubmit: (async (values, action) => {
      const data =  {
        _id: Math.floor(Math.random() * 1000000),
        userid:session.user.id,
        username:session.user.username,
        useravatar:session.user.avatar,
        comment:values.comment
      }
      toast.promise((postapi(data)), {
        pending: "Adding Comment",
        success: "Comment Added",
        error: "Failed To Add"
      });
      action.resetForm();

    }
    ),
  });
  if(session){
    return (
      <div className=' mt-5'>
                <form className='flex justify-between' onSubmit={handleSubmit} autoComplete="off">
                  <input type="text" className='w-[80%] bg-transparent border rounded-full px-3 py-1 border-gray-400 focus:outline-none focus:ring focus:ring-violet-300' placeholder='Comment' required name="comment"
                  value={values.comment}
                  onChange={handleChange} id="" />
                  <button type="submit" value="Submit" className='rounded-full p-2 bg-purple-400 text-white '><IoAddSharp size={25}/></button>
                </form>
    </div>
  )
}
else{
  return(<div className=' mt-5'>Please <Link href="/login" className='text-purple-500 hover:underline'>Login</Link> for comment</div>)
}
}
