import Review from "@/models/review";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function POST(request)
{
    
    try{
       const{title,category,characters,image,rating,trailer,episodes,detail,creator} = await request.json();
        await connectdb();
        await Review.create({title,category,characters,image,rating,trailer,episodes,detail,creator});
        return NextResponse.json({message: "Review Created",}, {status:200});
   }
    catch(error){
        return NextResponse.json({message: `${error}`,},{status:500});
    }

}

export async function GET(req,res) {
    try {
        await connectdb();
        const sort = 1;
        const page = req.nextUrl.searchParams.get('sort') || -1;;
        const pageSize = 15;
        const skip = (page - 1) * pageSize;

        const emails = await Review.find().sort({ title: sort }).select("_id title category rating image").skip(skip).limit(parseInt(pageSize));

        const totalDocuments = await Review.countDocuments();

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
    const id = request.nextUrl.searchParams.get('id');
    await connectdb();
    await Review.findByIdAndDelete(id);
    return NextResponse.json({message:"Review Deleted"},{status:200});
}