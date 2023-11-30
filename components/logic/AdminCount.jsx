import getAllReview from '@/controller/allreview';
import getAllUsers from '@/controller/alluser';
import React from 'react'

async function getEmailsmeta() {
  try {
    const api = process.env.API_URL;
    const response = await fetch(`${api}/api/email`, {
      cache: "no-store",
    });
    const email = await response.json();
    return email.meta;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function EmailCount() {
  const emails = await getEmailsmeta();
  return (
    <>
    {
        emails ? (
            <>{emails.totalDocuments}</>
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