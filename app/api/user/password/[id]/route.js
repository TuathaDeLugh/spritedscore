import User from '@/models/user'
import connectdb from '@/util/mongodb'
import { NextResponse } from 'next/server'
import bcrypt from "bcryptjs";

export async function PATCH(request, { params }) {
  const { id } = params;
  const { oldpassword, newpassword } = await request.json();
  
  try {
    const hashedpass = await bcrypt.hash(newpassword, 10)
    await connectdb();
    const user = await User.findOne({ _id: id });
     
      const passwordsMatch = await bcrypt.compare(oldpassword, user.password);
      if (passwordsMatch) {
          const updatedUser = await User.findByIdAndUpdate(
              id,
              { password: hashedpass },
              { new: true }
          );

          return NextResponse.json(
              { message: 'Password Updated', user: updatedUser },
              { status: 200 }
          );
      }
      
      if (!passwordsMatch) {
          return NextResponse.json(
              { message: 'Password Not Match' },
              { status: 400 }
          );
      }
  } catch (error) {
      console.error('Error in PATCH handler:', error.message);
      return NextResponse.json(
          { message: 'Failed to update password', error: error.message },
          { status: 500 }
      );
  }
}