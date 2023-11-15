"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {toast } from 'react-toastify';
import { MdOutlineDelete } from "react-icons/md";



export default function DelReviewBtn({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await fetch(`/api/review?id=${id}`, {
        method: "DELETE",
      });
      toast.success('Review Deleted');
      router.refresh();
      router.push("/user/review"); 
    }
  }
  return (
    <button onClick={handleDelete}>
      <MdOutlineDelete size={25} className='text-red-600' title="delete"/>
    </button>
  );
}