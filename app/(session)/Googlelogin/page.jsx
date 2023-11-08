import Gusername from "@/components/pages/Gusername";
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function GoogleLogin() {
  const session = await getServerSession(authOptions)
  console.log(session)
	if (!session) return redirect('/login')
	if (session.user.avatar) {
    redirect('/')
    } 

	if (session)
        return <>
      <Gusername/></>;
    }    
    
