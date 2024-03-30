import blog from "../models/blog.model.js";
import Author from "../models/user.model.js";

export const createBlog = async (req, res) => {
  const { author_id, title, description, categories, image, name } = req.body;
  try {
    if (title.length < 5) {
      return res
        .status(201)
        .json({ error: "title must be at least 5 characters" });
    }
    if (description.length < 5) {
      return res
        .status(201)
        .json({ error: "description must be at least 5 characters" });
    }
    const newBlog = new blog({
      author_name: name,
      thumbnail: image,
      title: title,
      content: description,
      author: author_id,
      date: Date.now(),
      categories: categories,
    });
    await newBlog.save().then((savedBlog) => {
      console.log("blog saved successfully");
      Author.findByIdAndUpdate(
        author_id,
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
