import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
    author_name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    categories: [
      {
        type: String,
        enum: [
          "music",
          "sports",
          "aI",
          "technology",
          "all",
          "politic",
          "genral knowledge",
        ],
      },
    ],
  },
  { timeseries: true }
);

const blog = mongoose.model("Blog", blogSchema);
export default blog;
