          export const dynamic = "force-dynamic"
          import { Suspense } from "react"
          import CheckoutClient from "./CheckoutClient"

          export default function CheckoutPage() {
            return (
              <Suspense fallback={<CheckoutSkeleton />}>
                <CheckoutClient />
              </Suspense>
            )
          }

          function CheckoutSkeleton() {
            return (
              <div className="max-w-6xl mx-auto p-6">
                <div className="animate-pulse space-y-6">
                  <div className="h-6 bg-gray-200 rounded w-1/3" />
                  <div className="h-40 bg-gray-200 rounded" />
                  <div className="h-40 bg-gray-200 rounded" />
                </div>
              </div>
            )
          }
