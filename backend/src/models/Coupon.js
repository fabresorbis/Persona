import mongoose from "mongoose"

const CouponSchema = new mongoose.Schema({
  code: String,
  discount: Number,
  expiresAt: Date,
  used: { type: Boolean, default: false }
})

export default mongoose.model("Coupon", CouponSchema)
