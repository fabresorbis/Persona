import "./globals.css"
import { kaiseiTokumin } from "../../lib/fonts"

export const metadata = {
  title: "Persona - Custom Merchandise",
  description: "Create your own custom t-shirts and mugs",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={kaiseiTokumin.className}>
      <body>{children}</body>
    </html>
  )
}
