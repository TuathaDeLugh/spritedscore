import Review from "@/models/review";
import connectdb from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function POST(request)
{
    
    try{
       const{title,category,characters,image,rating,trailer,detail,creator} = await request.json();
        await connectdb();
        // await Review.create(
            // {
            //     title: "Your Title",
            //     category: "Your Category",
            //     characters: [
            //       { _id: "1", name: "Umang", role: "main" },
            //       { _id: "2", name: "UmangSailor", role: "main" },
            //     ],
            //     image: "Your Image URL",
            //     rating: "Your Rating",
            //     detail: "Your Review",
            //     creator: { createdby: "Creator Name", avatar: "Avatar URL" },
            //     comments: [
            //       { _id: "1", useravatar: "User Avatar", username: "Username", comment: "Comment" },
            //     ]
            //   });
        await Review.create({title,category,characters,image,rating,trailer,detail,creator});
        

        return NextResponse.json(
           {
            message: "Review Created",
           }, 
           {status:200}

        );
   }
    catch(error){
        return NextResponse.json(
            {
                message: `${error}`,
            },
            {status:500}
 
         );
    }
}