import blog from "../models/blog.model.js";
import Author from "../models/user.model.js";

export const createBlog = async (req, res) => {
  const { author_id, title, content, category, img } = req.body;
  try {
    const newBlog = new blog({
      thumbnail: img,
      title: title,
      content: content,
      author: author_id,
      date: Date.now(),
      categories: [category],
    });
    await newBlog.save().then((savedBlog) => {
      console.log("blog saved successfully");
      Author.findByIdAndUpdate(
        _id,
        { $push: { blogs: savedBlog._id } },
        { new: true }
      )
        .then((updatedAuthor) => {
          console.log("updated author");
        })
        .catch((error) => {
          console.log(error);
        });
    });

    res.status(200).json({
      message: "Blog created successfully",
    });
  } catch (error) {
    console.error(error);
  }
};

export const DeleteBlog = async (req, res) => {
  const { _id } = req.params;
  const Dblog = await blog.findOne({ _id: _id });

  blog
    .findByIdAndDelete(_id)
    .then(async (blog) => {
      await Author.updateOne({ _id: Dblog.author }, { $pull: { blogs: _id } });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const UpdateBlog = (req, res) => {
  const { _id, title, content, img } = req.body;
  blog
    .findByIdAndUpdate(
      _id,
      {
        thumbnail: img,
        title: title,
        content: content,
      },
      { new: true }
    )
    .then((updatedBlog) => {
      res.status(200).json({
        message: "Blog updated successfully",
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const fetchBlog = (req, res) => {
  blog
    .find()
    .then((blogs) => {
      res.status(200).json(blogs);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const AuthorBlogs = (req, res) => {
  const { author_id } = req.params;
  blog
    .find({ author: author_id })
    .then((blogs) => {
      res.status(200).json(blogs);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const CategoryBlogs = (req, res) => {
  const { category_name } = req.params;
  const Catblog = blog.find({ categories: category_name });
  res.status(200).json(Catblog);
};
