const mongoose = require('mongoose')
const brandSchema = require('./brand')
const categorySchema = require('./category')
const productSchema = require('./product')

const Brand = mongoose.model('Brand', brandSchema)
const Category = mongoose.model('Category', categorySchema)
const Product = mongoose.model('Product', productSchema)

module.exports = {
    Brand,
    Category,
    Product
}