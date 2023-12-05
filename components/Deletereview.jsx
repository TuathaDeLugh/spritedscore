"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {toast } from 'react-toastify';
import { MdOutlineDelete } from "react-icons/md";
import { ref, deleteObject } from "firebase/storage";
import { storage } from '@/util/firebase';
import Dmodal from "./layout/Model";



export default function DelReviewBtn({ id , name , title }) {
  const router = useRouter();

  async function handleDelete() {
    const delapi = async () => {
    const imagedel = ref(storage, `images/${name}`);
    await deleteObject(imagedel);
    await fetch(`/api/review?id=${id}`, {
      method: "DELETE",
    });
    router.refresh();
  }

    toast.promise(delapi(), {
      pending: "Review deleting from database",
      success: "Review deleted Successfully",
      error: "Failed To delete"
    });
  }
  return (
    <Dmodal btn={<MdOutlineDelete size={25} className='text-red-600 ' />} header={'Are You Sure ?'} submit={<button className='w-full h-full' onClick={handleDelete}>Delete</button>}>
          You want to delete this Review : {title}
        </Dmodal>
  );
}