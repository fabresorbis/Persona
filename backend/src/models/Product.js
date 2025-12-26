import mongoose from "mongoose"

const personalizationAreaSchema = new mongoose.Schema(
  {
    areaId: { type: String, required: true },
    label: { type: String, required: true },
    allowedTypes: [{ type: String, enum: ["image", "text"] }],
    maxImages: { type: Number, default: 1 }
  },
  { _id: false }
)

const personalizationConfigSchema = new mongoose.Schema(
  {
    areas: [personalizationAreaSchema],
    constraints: {
      image: {
        minDpi: Number,
        maxSizeMB: Number,
        formats: [String]
      },
      text: {
        maxLength: Number
      }
    }
  },
  { _id: false }
)

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    slug: { type: String, required: true, unique: true },

    itemType: { type: String, required: true, index: true },

    productType: {
      type: String,
      enum: ["normal", "personalized"],
      required: true
    },

    category: { type: String, required: true },

    basePrice: { type: Number, required: true },

    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0
    },

    images: {
      type: [String],
      default: []
    },

    variants: {
      sizes: [String],
      colors: [String],
      materials: [String]
    },

    personalizationConfig: personalizationConfigSchema,

    active: { type: Boolean, default: true }
  },
  { timestamps: true }
)


export default mongoose.model("Product", productSchema)
