import express from "express";
import authMiddleware from "../moddlewere/auth.js";
import {
  placeOrder,
  verifyOrder,
  userOrders,
  listOrders,
  updataStatuse,
} from "../controllers/orderControllers.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updataStatuse);

export default orderRouter;
