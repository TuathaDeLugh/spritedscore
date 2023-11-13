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
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  creator: {
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
      },
      useravatar: {
        type: String,
        required: true,
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
});

const Review = mongoose.models.review || mongoose.model("review", reviewSchema);

export default Review;