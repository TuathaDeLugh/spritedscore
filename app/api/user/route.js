import User from "@/models/user";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function POST(request)
{
    
    try{
       const{name,username,email,avatar,password,provider} = await request.json();
        await connectdb();
        const role = 'user';
        await User.create({name,username,email,avatar,password,provider,role});
        

        return NextResponse.json(
           {
            message: "Uploded",
           }, 
           {status:200}

        );
   }
    catch(error){
        console.log(error)
        return NextResponse.json(
            {
                message: "failed to upload",
            },
            {status:500}
 
         );
    }
}

export async function GET()
{
    try{
        await connectdb();
        const users = await User.find();
        return NextResponse.json(
           {
             data:users
           }, 
           {status:200}

        );
    }
    catch(error){
        return NextResponse.json(
            {
                message: "failed to load",
            },
            {status:500}
 
         );
    }
}
export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get('id');
        await connectdb();
        await User.findByIdAndDelete(id);
        return NextResponse.json({message:"User Deleted"},{status:200});
    } catch (error) {
        console.log(error)
    }
}