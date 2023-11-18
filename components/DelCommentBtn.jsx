"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {toast } from 'react-toastify';
import { MdOutlineDelete } from "react-icons/md";


export default function DelCommentBtn({ revid , commid }) {
  
    const router = useRouter();

  async function handleDelete() {
    const delapi = async () => { 
    await fetch(`/api/review/comment/${revid}?commentId=${commid}`, {
      method: "DELETE",
    });
    router.refresh();
  }
  const confirmed = confirm("Are you sure?");
  if (confirmed) {
    toast.promise(delapi(), {
      pending: "Deleting Comment",
      success: "Comment Successfully",
      error: "Failed To Delete"
    });
    }
  }
  return (
    <button onClick={handleDelete}>
      <MdOutlineDelete size={25} className='text-red-600' title="delete"/>
    </button>
  );
}