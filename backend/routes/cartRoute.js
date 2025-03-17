import express from "express";
import {
  addToCart,
  removeFromCart,
  getcart,
} from "../controllers/cartController.js";
import authMiddlewere from "../moddlewere/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddlewere, addToCart);
cartRouter.post("/remove", authMiddlewere, removeFromCart);
cartRouter.post("/get", authMiddlewere, getcart);

export default cartRouter;
