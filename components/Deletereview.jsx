"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {toast } from 'react-toastify';
import { MdOutlineDelete } from "react-icons/md";
import { ref, deleteObject } from "firebase/storage";
import { storage } from '@/util/firebase';



export default function DelReviewBtn({ id , name }) {
  const router = useRouter();

  async function handleDelete() {
    const delapi = async () => {
    router.push("/user/review"); 
    const imagedel = ref(storage, `images/${name}`);
    await deleteObject(imagedel);
    await fetch(`/api/review?id=${id}`, {
      method: "DELETE",
    });
    router.refresh();
  }
  const confirmed = confirm("Are you sure?");
  if (confirmed) {
    toast.promise(delapi(), {
      pending: "Review adding to database",
      success: "Review Added Successfully",
      error: "Failed To Add"
    });
    }
  }
  return (
    <button onClick={handleDelete}>
      <MdOutlineDelete size={25} className='text-red-600' title="delete"/>
    </button>
  );
}