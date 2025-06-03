
import express from 'express'
import orderModel from '../models/orderModel';

const orderRouter = express.Router()

orderRouter.get("/all", async (req, res) => {
  const products = await orderModel.find();
  res.json(orders);
});

export default orderModel