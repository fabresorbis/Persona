import express from "express"
import { productUpload } from "../middlewares/upload.js"

import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deactivateProduct,
    getProductsByIds
} from "../controllers/product.controller.js"

const router = express.Router()

router.get("/", getAllProducts)
router.post("/bulk", getProductsByIds)
router.get("/:id", getProductById)
router.post("/", productUpload.array("images", 5), createProduct)
router.put("/:id", productUpload.array("images", 5), updateProduct)
router.patch("/:id/deactivate", deactivateProduct)



export default router
