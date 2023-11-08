import Gusername from "@/components/pages/Gusername";
import { getServerSession } from 'next-auth'
import User from '@/models/user'
import connectdb from '@/util/mongodb';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function GoogleLogin() {
  const session = await getServerSession(authOptions)
  if (session){
    const email = session.user.email;
      await connectdb();
      const user = await User.findOne({ email });
      if (!user) {
        return <>
      <Gusername/></>;
    }
    redirect("/")
    
    session.user.username= user.username;
    session.user.avatar = user.avatar;
    session.user.role=user.role;
    console.log(session)
    return(<><div className="pt-20">

      {session.user.username}<br/>
      {session.user.avatar}<br/>
      {session.user.role}<br/>
      {session.user.email}<br/>
      {session.user.name}<br/>
      </div>
      </>
      )
  }
if (!session) return redirect('/login')
};
