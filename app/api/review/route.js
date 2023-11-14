import Review from "@/models/review";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function POST(request)
{
    
    try{
       const{title,category,characters,image,rating,trailer,detail,creator} = await request.json();
        await connectdb();
        await Review.create({title,category,characters,image,rating,trailer,detail,creator});
        return NextResponse.json({message: "Review Created",}, {status:200});
   }
    catch(error){
        return NextResponse.json({message: `${error}`,},{status:500});
    }
}

export async function GET (){
    await connectdb();
    const reviews  = await Review.find();
    return NextResponse.json({data:reviews});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectdb();
    await Review.findByIdAndDelete(id);
    return NextResponse.json({message:"Review Deleted"},{status:200});
}