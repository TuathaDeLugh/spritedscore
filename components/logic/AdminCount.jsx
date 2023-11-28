import getAllReview from '@/controller/allreview';
import getAllUsers from '@/controller/alluser';
import getEmails from '@/controller/email';
import React from 'react'

export async function EmailCount() {
    const emails = await getEmails();
  return (
    <>
    {
        emails ? (
            <>{(emails).length}</>
            ) : null
}
</> 
  )
}


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