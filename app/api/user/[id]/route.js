import User from "@/models/user";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connectdb();
    const user = await User.findOne({ _id : id });
    return NextResponse.json({ data:user }, { status: 200 });

}
export async function PUT(request,{params}){
    const { id } = params;
    const {name,username,email}  = await request.json();
    await connectdb();
    await User.findByIdAndUpdate(id, {name,username,email} );
    return NextResponse.json({message:"Profile Updated"},{status:200});
}