import connectdb from "@/util/mongodb";
import Review from "@/models/review";
import { NextResponse } from "next/server";


export async function GET(req,res) {
    try {
        await connectdb();
        const  title  = req.nextUrl.searchParams.get('query') || ''
        const regex = new RegExp(title, "i");
        const reviews = await Review.find({ title: { $regex: regex } }).sort({ title: 1 });

      if (!reviews || reviews.length === 0) {
        return res.status(404).json({ message: "No matching reviews found" });
      }

      return NextResponse.json({ reviews },
        {status: 200}
        );
    }
    catch (error) {
        console.error('Error in GET handler:', error.message);
        return NextResponse.json(
            {
                message: 'Failed to Search',
                error: error.message, 
            },
            { status: 500 }
        );
    }
}