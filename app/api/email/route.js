
import Email from "@/models/mail";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function POST(request)
{
    
    try{
       const{fullname,email,subject,details} = await request.json();
        await connectdb();
        // await Email.create({"fullname":"UmangSailor","email":"ursailor@gmail.com","subject":"nothing","details":"nothing"});
        await Email.create({fullname,email,subject,details});
        

        return NextResponse.json(
           {
            message: "load mail",
           }, 
           {status:200}

        );
   }
    catch(error){
        return NextResponse.json(
            {
                message: "failed to load mail",
            },
            {status:500}
 
         );
    }
}

export async function GET()
{
    try{
        await connectdb();
        const emails = await Email.find();
        return NextResponse.json(
           {
             data:emails
           }, 
           {status:200}

        );
    }
    catch(error){
        return NextResponse.json(
            {
                message: "failed to load mail",
            },
            {status:500}
 
         );
    }
}
export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get('id');
        await connectdb();
        await Email.findByIdAndDelete(id);
        return NextResponse.json({message:"Project Deleted"},{status:200});
    } catch (error) {
        console.log(error)
    }
}
