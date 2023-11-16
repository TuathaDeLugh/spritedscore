import Review from "@/models/review";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connectdb();
    const reviews = await Review.findOne({ _id : id });
    return NextResponse.json({ data:reviews }, { status: 200 });

}