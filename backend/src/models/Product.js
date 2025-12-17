import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  type: String,
  colors: [String],
  printableSides: [String]
})

export default mongoose.model("Product", ProductSchema)
