import mongoose from 'mongoose'
const orderSchema = mongoose.Schema({
  name: { type: String },
  price: { type: Number },
});
// const product = mongoose.model("Product", productSchema);

export default mongoose.model("order", orderSchema);