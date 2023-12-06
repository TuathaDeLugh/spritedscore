import Email from "@/models/mail";
import Review from "@/models/review";
import User from "@/models/user";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function GET(req,res) {
    try {
        const sort = -1;
        await connectdb();
        const totalReviews = await Review.countDocuments();
        const totalEmails = await Email.countDocuments();
        const totalUsers = await User.countDocuments();
        const mostReview = await Review.aggregate([
          {
            $group: {
              _id: '$creator.userid',
              username: { $first: '$creator.createdby' }, // Assuming this field represents the creator's username in the review document
              reviewCount: { $sum: 1 },
            },
          },
          {
            $sort: {
              reviewCount: -1,
            },
          },
          {
            $limit: 1,
          },
        ]);
        const mostReviewsUser = mostReview[0] || null
        const mostCommented= await Review.aggregate([
          {
            $project: {
              _id: 1,
              title: 1,
              numComments: { $size: '$comments' },
            },
          },
          {
            $sort: {
              numComments: sort,
            },
          },
          {
            $limit: 1,
          },
        ]);
        const mostCommentedReview = mostCommented[0] || null

    
      
          
         const mostComUser = await Review.aggregate([
      {
        $unwind: '$comments',
      },
      {
        $group: {
          _id: '$comments.username',
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          count: sort,
        },
      },
      {
        $limit: 1,
      },
      {
        $project: {
          username: '$_id',
          count: 1,
        },
      },
    ]);
    const mostCommentedUser = mostComUser[0] || null

    const mostWatchlistedUsers = await User.aggregate([
      {
        $lookup: {
          from: 'reviews',
          localField: 'watchlist',
          foreignField: '_id',
          as: 'watchlistReviews',
        },
      },
      {
        $project: {
          username: 1,
          watchlistCount: { $size: '$watchlistReviews' },
        },
      },
      {
        $sort: {
          watchlistCount: -1,
        },
      },
      {
        $limit: 6,
      },
    ]);


    const latestReviews = await Review.find().select("_id title category rating image episodes").sort({ createdAt: sort }).limit(5);
    

    
        return NextResponse.json({
          totalReviews,
          totalEmails,
          totalUsers,
          mostReviewsUser,
          mostCommentedReview,
          mostCommentedUser,
          mostWatchlistedUsers,
          latestReviews

        });
      } catch (error) {
        console.error(error);
      }
}