import connectDb from "./database/connection.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRoute from "./routes/User.route.js";
import BlogRoute from "./routes/Blog.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  connectDb();
  console.log("running");
});

app.use("/users", AuthRoute);
app.use("/api/blog", BlogRoute);

app.get("/", (req, res) => {
  res.send("api is available");
});
