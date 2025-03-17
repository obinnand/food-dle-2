import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import useRouter from "./routes/userRoutes.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;

//middlewere
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", useRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});
app.listen(port, () => {
  console.log(`server Started on http://localhost:${port}`);
});

//mongodb+srv://obinnandor:<db_password>@cluster0.ir73z.mongodb.net/?
