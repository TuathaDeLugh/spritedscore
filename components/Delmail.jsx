"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import { MdOutlineDelete } from "react-icons/md";
import { toast } from 'react-toastify';

function DelmailBtn({ id }) {
    const router = useRouter();
    
  async function handleDelete() {
      const confirmed = confirm("Are you sure?");
      if (confirmed) {
        await fetch(`/api/email?id=${id}`, {
          method: "DELETE",
        });
      toast.success('Contact request Deleted');
        router.refresh();
      }
    }
    return (
      <button onClick={handleDelete}>
        <MdOutlineDelete size={25} className='text-red-600' />
      </button>
    );
  }

export default DelmailBtn