import Email from "@/models/mail";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connectdb();
    const project = await Email.findOne({ _id: id });
    return NextResponse.json({ data:project }, { status: 200 });
}