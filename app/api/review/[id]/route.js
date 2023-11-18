import Review from "@/models/review";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    const { id } = params;
    const { title,category,characters,image,rating,trailer,episodes,detail,creator}  = await request.json();
    await connectdb();
    await Review.findByIdAndUpdate(id, { title,category,characters,image,rating,trailer,episodes,detail,creator });
    return NextResponse.json({message:"Review Updated"},{status:200});
} 

export async function GET(request, { params }) {
    const { id } = params;
    await connectdb();
    const reviews = await Review.findOne({ _id : id });
    return NextResponse.json({ data:reviews }, { status: 200 });

}

