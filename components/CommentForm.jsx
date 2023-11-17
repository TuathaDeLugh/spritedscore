"use client"
import React from 'react'

export default function CommentForm({ params: { reviewid } }) {
  return (
    <div className=' mt-5'>
                <form className='flex justify-between'>
                  <input type="text" className='w-[80%] bg-transparent border rounded-full px-3 py-1 border-gray-400 focus:outline-none focus:ring focus:ring-violet-300' placeholder='Comment' required name="comment" id="" />
                  <button type="submit" value="Submit" className='rounded-full p-2 bg-purple-400 '>🪄</button>
                </form>
    </div>
  )
}
