import express from "express"
import { createCoupon, validateCoupon } from "../controllers/coupon.controller.js"
const router = express.Router()

router.post("/", createCoupon)
router.get("/:code", validateCoupon)

export default router
