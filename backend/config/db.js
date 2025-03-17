import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://obinnandor:0b1nnand@cluster0.ir73z.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};
