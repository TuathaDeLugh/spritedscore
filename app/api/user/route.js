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


export async function GET(req,res) {
    try {
        await connectdb();
        const page = req.nextUrl.searchParams.get('page') || 1;
        const pageSize = 15;
        const skip = (page - 1) * pageSize;

        const emails = await User.find().select("_id username name email role").skip(skip).limit(parseInt(pageSize));

        const totalDocuments = await User.countDocuments();

        const hasNextPage = skip + pageSize < totalDocuments;

        return NextResponse.json(
            {
                data: emails,
                meta: {
                    totalDocuments,
                    totalPages: Math.ceil(totalDocuments / pageSize),
                    currentPage: parseInt(page),
                    hasNextPage,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error in GET handler:', error.message);
        return NextResponse.json(
            {
                message: 'Failed to load mail',
                error: error.message, 
            },
            { status: 500 }
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