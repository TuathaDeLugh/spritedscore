"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import { MdOutlineDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import Dmodal from './layout/Model';

function DelmailBtn({ id,subject }) {
    const router = useRouter();
    
  async function handleDelete() {
    router.push('/admin/contact');
      
        await fetch(`/api/email?id=${id}`, {
          method: "DELETE",
        });
      toast.success('Contact request Deleted');
      router.refresh();
      }
    return (
      
        
        <Dmodal btn={<MdOutlineDelete size={25} className='text-red-600 ' />} header={'Are You Sure ?'} submit={<button className='w-full h-full' onClick={handleDelete}>Delete</button>}>
          You want to delete this contact request ? : {subject}
        </Dmodal>
    );
  }

export default DelmailBtn