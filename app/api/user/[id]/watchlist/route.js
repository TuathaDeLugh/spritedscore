import Review from '@/models/review'
import User from '@/models/user'
import connectdb from '@/util/mongodb'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const { id } = params

  await connectdb()
  const user = await User.findOne({ _id: id }).populate('watchlist')
  return NextResponse.json({ data: user }, { status: 200 })
}
