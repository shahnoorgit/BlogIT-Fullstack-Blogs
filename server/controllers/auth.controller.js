import Author from "../models/user.model.js";
import cloudinary from "cloudinary";
import generateTokenandsetCookie from "../utils/jwt.token.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const Signup = async (req, res) => {
  const { profile, name, password, email, bio, username, confirmPassword } =
    req.body;

  const CloudinaryIMG = await cloudinary.uploader.upload(profile);
  const user = await Author.findOne({ username: username });
  const mail = await Author.findOne({ email: email });
  if (user) {
    return res.status(400).json({ error: "Username already taken" });
  }
  if (mail) {
    return res.status(400).json({ error: "Email already taken" });
  }
  if (password.length < 5) {
    return res
      .status(400)
      .json({ error: "password must be at least 5 characters" });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }
  const salt = await bcrypt.genSalt(5);
  const HashedPassword = await bcrypt.hash(password, salt);
  const newUser = new Author({
    profile: {
      public_id: CloudinaryIMG.public_id,
      url: CloudinaryIMG.secure_url,
    },
    name: name,
    password: HashedPassword,
    email: email,
    bio: bio,
    username: username,
    blogs: [],
  });
  if (newUser) {
    generateTokenandsetCookie(newUser, res);
    newUser
      .save()
      .then((user) => console.log("new user saved"))
      .catch((err) => console.log(err));
    res.status(200).json({
      profile: newUser.profile.url,
      id: newUser.id,
      name: newUser.name,
      username: newUser.username,
      bio: newUser.bio,
      blogs: newUser.blogs,
      profile: newUser.profile,
    });
    console.log("new user");
  }
  console.log("not err but still user not created");
};

export const Login = async (req, res) => {
  const { username, password } = req.body;
  const user = await Author.findOne({ username: username });
  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ error: "Invalid password" });
  }

  generateTokenandsetCookie(user._id, res);
  res.status(200).json({
    name: user.name,
    username: user.username,
    id: user._id,
    profile: user.profile,
    bio: user.bio,
    blogs: user.blogs,
  });
};

export const logout = (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
  res.status(200).json({
    message: "Successfully logged out",
  });
};

export const fetchAuthorByName = (req, res) => {
  const { author_name: name } = req.params;
  Author.findOne({ name: name })
    .then((author) => {
      res.status(200).json(author);
    })
    .catch((error) => {
      console.error(error);
    });
};
