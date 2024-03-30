import connectDb from "./database/connection.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRoute from "./routes/User.route.js";
import BlogRoute from "./routes/Blog.route.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "10mb" }));
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  connectDb();
  console.log("running");
});

app.use("/api/users", AuthRoute);
app.use("/api/blog", BlogRoute);

app.get("/", (req, res) => {
  res.send("api is available");
});
