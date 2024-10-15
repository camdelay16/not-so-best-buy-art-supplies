const { Schema } = require('mongoose')

const Category = new Schema (
    {
        supplyType: { type: String, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = Category