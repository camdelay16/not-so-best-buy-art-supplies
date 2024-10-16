const { Schema } = require('mongoose')
const brandSchema = require('./brand')
const categorySchema = require('./category')

const Product = new Schema (
    {
        productName: { type: String, required: true },
        supplyType: { type: Schema.Types.ObjectId, ref: "category_id" },
        brandId:  { type: Schema.Types.ObjectId, ref: "brand_id" },
        price:  { type: String, required: true },
        isAvailable:  { type: Boolean, required: true },
        stock:  { type: Number, required: true },
        imageURL: { type: String, required: true },
        isEcoFriendly:  { type: Boolean, required: true },
        isWaterSoluble:  { type: Boolean, required: true },
        isChildSafe:  { type: Boolean, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = Product