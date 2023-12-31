import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: { 
    type: [String], 
    required: true 
  },

  characters: [
    {
      _id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
    },
  ],
  image: {
    name: {
    type: String,
    required: true,
  },
    link:{
    type: String,
    required: true,
  } 
},
  rating: {
    type: String,
    required: true,
  },
  trailer: {
    type: String,
    required: true,
  },
  episodes: {
    type: String
  },
  detail: {
    type: String,
    required: true,
  },
  creator: {
    userid:{
      type: String,
      required: true,
    },
    createdby: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  comments: [
    {
      _id: {
        type: String,
        required: true,
        unique: true
      },
      userid: {
        type: String,
        required: true,
        unique: true
      },
      useravatar: {
        type: String,
      },
      username: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  
},
{
  timestamps:true
});
reviewSchema.index({ title: 'text' });


const Review = mongoose.models.review || mongoose.model("review", reviewSchema);

export default Review;