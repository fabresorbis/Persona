import express from "express"
import cors from "cors"

// import auth from "./src/routes/auth.routes.js"
// import product from "./src/routes/product.routes.js"
// import order from "./src/routes/order.routes.js"
// import coupon from "./src/routes/coupon.routes.js"
import payment from "./src/routes/payment.routes.js"
// import admin from "./src/routes/admin.routes.js"

const app = express()
app.use(cors())
app.use(express.json())

// app.use("/api/auth", auth)
// app.use("/api/products", product)
// app.use("/api/orders", order)
// app.use("/api/coupons", coupon)
app.use("/api/payments", payment)
// app.use("/api/admin", admin)

export default app
