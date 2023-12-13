import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { toast } from 'react-toastify'

export  default async function layout({ children }) {
    const session = await getServerSession(authOptions)
    
    if (session){

        return (<>
      { children }
  </>
  )
}
    else{
        throw new Error("Login Is Required For This Page")
    }
}
