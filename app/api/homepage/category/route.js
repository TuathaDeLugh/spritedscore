import Review from "@/models/review";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    await connectdb();
    const distinctCategories = await Review.distinct("category");

    const highRatedReviews = [];

    for (const category of distinctCategories) {
      const highestRatedReview = await Review.findOne({ category })
        .sort({ rating: -1, createdAt: -1, _id: -1 })
        .select("_id title category image rating")
        .exec();

      if (highestRatedReview) {
        // Add the category name to the result
        const resultReview = {
          ...highestRatedReview.toObject(),
          categoryName: category,
        };

        highRatedReviews.push(resultReview);
      }
    }
      return NextResponse.json({ data:highRatedReviews }, { status: 200 });
}