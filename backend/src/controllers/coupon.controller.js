import Coupon from "../models/Coupon.js"
import { generateCoupon } from "../utils/generateCoupon.js"

export const createCoupon = async (_, res) => {
  const coupon = await Coupon.create({
    code: generateCoupon(),
    discount: 20
  })
  res.json(coupon)
}

export const validateCoupon = async (req, res) => {
  const coupon = await Coupon.findOne({ code: req.params.code, used: false })
  if (!coupon) return res.status(400).json({ valid: false })
  res.json({ valid: true, discount: coupon.discount })
}
