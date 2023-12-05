import Review from "@/models/review";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function GET (){
    const sort = -1;
    const limit = 6;
    await connectdb();
    const reviews  = await Review.find().sort({ createdAt: sort }).select("_id title category rating image episodes").limit(limit);
    return NextResponse.json({data:reviews});
}