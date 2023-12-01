import getAllReview from '@/controller/allreview';
import getAllUsers from '@/controller/alluser';
import React from 'react'

export async function ReviewCount() {
    const reviews = await getAllReview();
  return (
    <>
    {
        reviews ? (
            <>{(reviews).length}</>
            ) : null
}
</> 
  )
}

export async function UserCount() {
  const users = await getAllUsers();
return (
  <>
  {
      users ? (
          <>{(users).length}</>
          ) : null
}
</> 
)
}