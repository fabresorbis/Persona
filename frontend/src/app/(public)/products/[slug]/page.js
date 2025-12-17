export default function ProductDetailPage({ params }) {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Slug: {params.slug}</p>
    </div>
  )
}
