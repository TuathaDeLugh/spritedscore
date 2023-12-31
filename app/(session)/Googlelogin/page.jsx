import Gusername from "@/components/pages/Gusername";
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function GoogleLogin() {
  const session = await getServerSession(authOptions)
	if (!session) return redirect('/login')
	if (session.user.id) {
    redirect('/')
    } 

	if (session)
        return <>
      <Gusername/></>;
    }
    
