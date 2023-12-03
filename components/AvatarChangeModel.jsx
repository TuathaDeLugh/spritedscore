"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai';

export default function AvatarModel({userId}) {
  const { data: session }  = useSession()
  console.log(session);
  const avatars = [];

for (let i = 1; i <= 37; i++) {
  const imageName = `Avatar (${i}).png`;
  avatars.push(imageName);
}
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };
  return (
    
          <div className="flex flex-wrap gap-4 max-h-72 overflow-auto justify-center">
            <AiOutlineUser
                key={'clear'}
                width={100}
                height={100}
                className={`w-20 h-20 rounded-full text-gray-400 cursor-pointer border-2  transition duration-300 ${selectedAvatar === "" ? 'border-2 border-purple-600 ' : 'dark:border-gray-500'
                  }`}
                onClick={() => handleAvatarClick("")}
              />
              {/* {
                session.user && session.user.image ? (
                  <Image 
                  key={'google'}
                  src={session.user.image}
                  alt={`googleavatar`}
                  width={100}
                  height={100}
                  className={`w-20 h-20 rounded-full cursor-pointer border-2 p-[1px]  transition duration-300 ${selectedAvatar === session.user.image ? 'border-2 border-purple-600' : 'border-transparent'
                    }`}
                  onClick={() => handleAvatarClick(session.user.image)}
                />
                ) : null
              } */}
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
  )
}
