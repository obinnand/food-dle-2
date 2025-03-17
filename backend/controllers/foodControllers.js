import fondModel from "../models/foodModel.js";
import fs from "fs";

//add foode item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new fondModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, massage: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, massage: "Error" });
  }
};
//all food list
const listFood = async (req, res) => {
  try {
    const foods = await fondModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//remove food item
const removeFood = async (req, res) => {
  try {
    const food = await fondModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await fondModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: Error });
  }
};

export { addFood, listFood, removeFood };
