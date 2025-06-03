import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.listen(8080, () => {
  mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server Started");
});

const userSchema = mongoose.Schema({
  name: { type: String },
});
const user = mongoose.model("User,userSchema");

app.use(cors());
app.get("/", (req, res) => {
  return res.send("Good Morning");
});

app.get("/register", async (req, res) => {
  const {name}=req.body
  const result = await user.insertOne({ name: name });
  return res.json(result);
});

app.get("/greet", (req, res) => {
  res.send("Greetings");
});

app.get("/name", (req, res) => {
  res.send("Akhil");
});

app.get("/weather", (req, res) => {
  res.send("hello world");
});

app.get("/products", (req, res) => {
  const products = [
    { name: "Product 1", price: 34 },
    { name: "Product 2", price: 64 },
    { name: "Product 3", price: 45 },
  ];
  res.json(products);
});
