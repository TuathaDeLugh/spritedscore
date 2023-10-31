import mongoose, { Schema } from "mongoose";


const projectSchema = new Schema(
    {
        title: String,
        category: String,
        image: String,
        rating: String,
        review: String,
        createdby: String,
        createravatar:String,
        comments: [
            {
                useravatar: String,
                username:String,
                commant:String
            }
        ]
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.models.project || mongoose.model("project", projectSchema);

export default Project;