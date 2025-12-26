import Product from "../models/Product.js"

const generateSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

export const createProduct = async (req, res) => {
  try {
    const body = JSON.parse(req.body.data)
    console.log(req.files)
console.log(req.body)


    if (
      body.productType === "personalized" &&
      (!body.personalizationConfig?.areas?.length)
    ) {
      return res.status(400).json({ message: "Personalized product must have print areas" })
    }

    const imageUrls = req.files?.map(file => file.path) || []

    const product = await Product.create({
      ...body,
      images: imageUrls,
      slug: `${generateSlug(body.name)}-${Date.now()}`
    })

    res.status(201).json(product)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const updateProduct = async (req, res) => {
  try {
    const body = JSON.parse(req.body.data)

    const uploaded = req.files?.map(f => f.path) || []
    const images = [...(body.images || []), ...uploaded]

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { ...body, images },
      { new: true }
    )

    res.json(product)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}


export const getAllProducts = async (req, res) => {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1)
    const limit = Math.max(Number(req.query.limit) || 13, 1)
    const skip = (page - 1) * limit

    const [products, totalProducts] = await Promise.all([
      Product.find({ active: true })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Product.countDocuments({ active: true })
    ])

    res.json({
      products,
      page,
      limit,
      totalProducts,
      totalPages: Math.ceil(totalProducts / limit)
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}


export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({ message: "Product not found" })
    res.json(product)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}



export const deactivateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { active: false },
      { new: true }
    )
    res.json(product)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
