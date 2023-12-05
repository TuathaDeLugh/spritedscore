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
        const mostReviewsUser = await User.findOne().sort({ 'watchlist.length': sort });
        const mostCommentedReview = await Review.aggregate([
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

    
      
          const totalComments = await Review.aggregate([
            {
              $group: {
                _id: null,
                totalComments: { $sum: { $size: '$comments' } },
              },
            },
          ]);
        // Find user with the most comments
         const mostCommentedUser = await Review.aggregate([
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
    const latestReviews = await Review.find().sort({ createdAt: sort }).limit(5);
    const mostWatchlistUsers = await User.find().sort({ 'watchlist.length': sort }).limit(5);

    
        return NextResponse.json({
          totalReviews,
          totalEmails,
          totalUsers,
          mostReviewsUser,
          mostCommentedReview,
          mostCommentedUser,
          totalComments,
          mostWatchlistUsers,
          latestReviews

        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}