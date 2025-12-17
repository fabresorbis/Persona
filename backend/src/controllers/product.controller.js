import Product from "../models/Product.js"

export const getProducts = async (_, res) => {
  res.json(await Product.find())
}

export const createProduct = async (req, res) => {
  res.json(await Product.create(req.body))
}
