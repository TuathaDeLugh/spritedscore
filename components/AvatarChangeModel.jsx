"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { AiOutlineUser } from 'react-icons/ai';
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function AvatarModel({userId}) {
const [modalOpen, setModalOpen] = useState(false);
  const trigger = useRef(null);
  const modal = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (!modalOpen || modal.current.contains(target) || trigger.current.contains(target)) return;
      setModalOpen(false);
    };

    const keyHandler = ({ keyCode }) => {
      if (modalOpen && keyCode === 27) {
        setModalOpen(false);
      }
    };

    const handleScroll = () => {
      if (modalOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    document.addEventListener('click', clickHandler);
    document.addEventListener('keydown', keyHandler);
    handleScroll();

    return () => {
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('keydown', keyHandler);
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

//  logic
  const router = useRouter()

  const { data: session , update }  = useSession()
  const avatars = [];

for (let i = 1; i <= 37; i++) {
  const imageName = `Avatar (${i}).png`;
  avatars.push(imageName);
}
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleSubmit = async () => {
    try {
      setModalOpen(false)
      let choosenavatar = selectedAvatar;
    if (avatars.includes(selectedAvatar)) {
      choosenavatar = `/avatar/${selectedAvatar}`;
    }
      const response = await fetch(`/api/user/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ avatar: choosenavatar  }),
      });
      const { updatedUser } = await response.json();

      await update({
        ...session,
        user:{
          avatar:updatedUser.avatar,
        }
      })
      if (!response.ok) {
        throw new Error('Avatar update failed');
      }
      
      router.refresh();
      toast.success('Avatar Updated Succesfully.');
    } catch (error) {
      console.error('Error updating avatar:', error.message);
    }
  }
  return (
    <>
        <button
          className=' p-1 bg-purple-500 rounded-full'
          ref={trigger}
          onClick={() => setModalOpen(true)}
        >
          <MdOutlineModeEditOutline className='rounded-full text-white' size={18} />
        </button>
        <div
          className={`fixed z-50 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-slate-900/50 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-white dark:bg-gray-800 border dark:border-slate-600 px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl font-semibold sm:text-2xl">
              Select Avatar
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
            ></span>
            <div className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
            <div className="flex flex-wrap gap-4 max-h-72 overflow-auto justify-center">
            <AiOutlineUser
                key={'clear'}
                width={100}
                height={100}
                className={`w-20 h-20 rounded-full text-gray-400 cursor-pointer border-2  transition duration-300 ${selectedAvatar === "" ? 'border-2 border-purple-600 ' : 'dark:border-gray-500'
                  }`}
                onClick={() => handleAvatarClick("")}
              />
              {
                session && session.user && session.user.image ? (
                  <Image 
                  key={'google'}
                  src={session.user.image}
                  alt={`googleavatar`}
                  width={100}
                  height={100}
                  className={`w-20 h-20 rounded-full cursor-pointer border-2 p-[1px]  transition duration-300 ${selectedAvatar === session.user.image ? 'border-2 border-purple-600' : 'border'
                    }`}
                  onClick={() => handleAvatarClick(session.user.image)}
                />
                ) : null
              }
            {avatars.map((avatar, index) => (
              <Image 
                key={index}
                src={`/avatar/${avatar}`}
                alt={`Avatar ${index + 1}`}
                width={100}
                height={100}
                className={`w-20 h-20 rounded-full cursor-pointer border-2 p-[1px]  transition duration-300 ${selectedAvatar === avatar ? 'border-2 border-purple-600' : 'border-transparent'
                  }`}
                onClick={() => handleAvatarClick(avatar)}
              />
            ))}
          </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="block w-full rounded-md border border-stroke dark:border-slate-600 p-3 text-center text-base font-medium text-dark transition hover:border-red-500/70 hover:bg-red-500/70 hover:text-white dark:text-white"
                >
                  Cancel
                </button>
              </div>
              <div className="w-1/2 px-3">
                <button className="block w-full rounded-md border dark:border-slate-600 bg-purple-500/70 p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
                onClick={handleSubmit}>
                 Update
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};








