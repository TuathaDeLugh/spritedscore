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
      success: "Comment Deleted Successfully",
      error: "Failed To Delete"
    });
    }
  }
  return (
    <button onClick={handleDelete} className="bg-red-400 text-white p-1 rounded-lg">
      <MdOutlineDelete size={20} title="delete"/>
    </button>
  );
}