import Review from "@/models/review";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function GET (){
    await connectdb();
    const reviews  = await Review.find().sort({ createdAt: -1 }).select("_id title category rating image episodes").limit(6);
    return NextResponse.json({data:reviews});
}