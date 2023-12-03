"use client"
import React, { useState } from 'react'

export default function AvatarModel({ userId , close }) {
  console.log(userId);
  const avatars = []
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
    onAvatarSelect(avatar);
  };
  return (
    <div className="absolute  top-[63px] md:top-[70px] left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg -mt-[63px] md:-mt-[70px]">
        <h2 className="text-lg font-semibold mb-4">Select Your Avatar</h2>
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={`/avatars/${avatar}`}
                alt={`Avatar ${index + 1}`}
                className={`w-20 h-20 cursor-pointer border-2 border-transparent transition duration-300 ${selectedAvatar === avatar ? 'border-blue-500' : ''
                  }`}
                onClick={() => handleAvatarClick(avatar)}
              />
            ))}
          </div>
        </div>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  )
}
