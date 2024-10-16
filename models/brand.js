const { Schema } = require('mongoose')

const Brand = new Schema (
    {
        brand_name: { type: String, required: true },
        url: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = Brand