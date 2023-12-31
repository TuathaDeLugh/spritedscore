import connectdb from "@/util/mongodb";
import Review from "@/models/review";
import { NextResponse } from "next/server";


export async function GET(req) {
    try {
        await connectdb();
        const query = await req.nextUrl.searchParams.get('query') || null
        const  title  = decodeURIComponent(query)
        const regex = new RegExp(`^${title}`, "i");//here ^ for start with & i for case insenctive no other stuff
        const reviews = await Review.find({ title: { $regex: regex } }).select('_id title image rating').sort({ title: 1 });
      return NextResponse.json({ data : reviews },
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