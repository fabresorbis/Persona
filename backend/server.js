import express from "express"
import cors from "cors"
import paymentRoutes from "./src/routes/payment.routes.js"

const app = express()

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
  })
)

app.use(express.json())

app.use("/api/payments", paymentRoutes)

app.get("/", (req, res) => {
  res.json({ success: true, message: "API running" })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
