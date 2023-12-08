import Review from "@/models/review";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
        try {
                const { id } = params;
                const { _id, userid , useravatar, username, comment } = await request.json();
                await connectdb();
                const foundReview = await Review.findById(id).exec();
                if (!foundReview) {
                        console.error("Review not found");
                        return NextResponse.json({ message: "Review not found" }, { status: 404 });
                }
                foundReview.comments.push({
                        _id,
                        userid,
                        useravatar,
                        username,
                        comment,
                });
                await foundReview.save();
                return NextResponse.json({ message: "Comment created" }, { status: 200 });
        } catch (error) {
                console.error("Error:", error);
                return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
        }
}

export async function DELETE(request, { params }) {
        try {
                const { id,} = params;
                const commentId = request.nextUrl.searchParams.get('commentId');
                await connectdb();
                const foundReview = await Review.findById(id).exec();
                if (!foundReview) {
                        console.error("Review not found");
                        return NextResponse.json({ message: "Review not found" }, { status: 404 });
                }
                foundReview.comments.pull({ _id: commentId });
                await foundReview.save();
                return NextResponse.json({ message: "Comment removed" }, { status: 200 });
        } catch (error) {
                console.error("Error:", error);
                return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
        }
}