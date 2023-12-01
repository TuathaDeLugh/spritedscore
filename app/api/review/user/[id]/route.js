import Review from "@/models/review";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params },res) {
    try {
        await connectdb();
        const { id } = params;
        const page = req.nextUrl.searchParams.get('page') || 1;
        const pageSize = 10;
        const skip = (page - 1) * pageSize;

        const emails = await Review.find({ "creator.userid": id }).sort({ title: 1 }).select("_id title rating image").skip(skip).limit(parseInt(pageSize));

        const totalDocuments = await Review.countDocuments({ "creator.userid": id });

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