import stripe from "../config/stripe.js"

export const createCheckoutSession = async (req, res) => {
    console.log("hello")
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "gbp",
          product_data: { name: "Persona Test Payment" },
          unit_amount: 5000
        },
        quantity: 1
      }
    ],
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel"
  })

  res.json({ url: session.url })
}
