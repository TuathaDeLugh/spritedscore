import Review from "@/models/review";
import User from "@/models/user";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connectdb();
    const user = await User.findOne({ _id : id });
    return NextResponse.json({ data:user }, { status: 200 });

}
export async function PUT(request, { params }) {
    const { id } = params;
    const { name, username, email } = await request.json();
      await connectdb();
      const updatedUser = await User.findByIdAndUpdate(id, { name, username, email }, { new: true });
      await Review.updateMany(
        { 'creator.userid': id },
        {
          $set: {
            'creator.createdby': updatedUser.username,
            'creator.avatar': updatedUser.avatar,
          },
        }
      );
      return NextResponse.json({ message: 'Profile and associated reviews updated' }, { status: 200 });
  }