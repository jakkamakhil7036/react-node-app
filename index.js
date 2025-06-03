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
const user = mongoose.model("User",userSchema);
const productSchema=mongoose.Schema({
  name:{type:String},
  price:{type:Number},
})
const Product=mongoose.model("Product",productSchema)

app.use(cors());
app.use(express.json())
app.get("/", (req, res) => {
  return res.send("Good Morning");
});

app.post("/register", async (req, res) => {
  const {name,email,address}=req.body;
  
  const result =await user.create({ name, email, address });

 
  return res.json(result);
});

app.post("/login", async (req, res) => {
  const {email,pass}=req.body;
  
  const result = await user.insert({ email,pass });
  if(!result)return res.json({message:"Invalid user or password"})
  
  return res.json(result);
});

app.post("/Products", async (req, res) => {
  const {name,price}=req.body;
  
  const result = await Product.create({ name, price });
 
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
