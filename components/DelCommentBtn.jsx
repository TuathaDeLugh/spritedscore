"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {toast } from 'react-toastify';
import { MdOutlineDelete } from "react-icons/md";
import Dmodal from "./layout/Model";


export default function DelCommentBtn({ revid , commid }) {
  
    const router = useRouter();

  async function handleDelete() {
    const delapi = async () => { 
    await fetch(`/api/review/comment/${revid}?commentId=${commid}`, {
      method: "DELETE",
    });
    router.refresh();
  }
  
    toast.promise(delapi(), {
      pending: "Deleting Comment",
      success: "Comment Deleted Successfully",
      error: "Failed To Delete"
    });
    
  }
  return (
    <Dmodal btn={<MdOutlineDelete size={25} className='bg-red-400 text-white p-1 rounded-lg ' />} header={'Are You Sure ?'} submit={<button className='w-full h-full' onClick={handleDelete}>Delete</button>}>
          You want to delete this Comment ?
        </Dmodal>

  );
}