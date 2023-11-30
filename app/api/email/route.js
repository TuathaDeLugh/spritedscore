
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

export async function GET(req,res) {
    try {
        await connectdb();
        const page = req.nextUrl.searchParams.get('page') || 1;
        const pageSize = 15;
        const skip = (page - 1) * pageSize;

        const emails = await Email.find().skip(skip).limit(parseInt(pageSize));

        const totalDocuments = await Email.countDocuments();

        return NextResponse.json(
            {
                data: emails,
                meta: {
                    totalDocuments,
                    totalPages: Math.ceil(totalDocuments / pageSize),
                    currentPage: parseInt(page),
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error in GET handler:', error.message);
        return NextResponse.json(
            {
                message: 'Failed to load mail',
                error: error.message, // Include the error message in the response for debugging
            },
            { status: 500 }
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
