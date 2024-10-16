const express = require('express')
const db = require('./db')
const brandController = require('./controllers/brandController.js')
const categoryController = require('./controllers/categoryController.js')
const productController = require('./controllers/productController.js')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`express server running on ${PORT}`)
})

app.get ('/', (req,res) => {
    res.send(`Taubman's Art Supplies`)
})

//Brand Routes
app.get('/brands', brandController.getAllBrands)
app.get('/brands/:id', brandController.getBrandsById)
app.get('/brands/name/:name', brandController.getBrandsByName)
app.post('/brands/', brandController.createBrand)
app.put('/brands/:id', brandController.updateBrand)
app.delete('/brands/:id', brandController.deleteBrand)

//Category Routes
app.get('/categories', categoryController.getAllCategories)
app.get('/categories/:id', categoryController.getCategoriesById)
app.get('/categories/name/:name', categoryController.getCategoriesByName)
app.post('/categories/', categoryController.createCategory)
app.put('/categories/:id', categoryController.updateCategory)
app.delete('/categories/:id', categoryController.deleteCategory)

//Product Routes
app.get('/products', productController.getAllProducts)
app.get('/products/:id', productController.getProductsById)
app.get('/products/name/:name', productController.getProductsByName)
app.get('/products/paperboards', productController.getPaperBoardProducts)
app.get('/products/toolsupplies', productController.getToolSupplyProducts)
app.get('/products/eco-friendly', productController.getEcoFriendlyProducts)
app.get('/products/water-soluble', productController.getWaterSolubleProducts)
app.get('/products/child-safe', productController.getChildSafeProducts)
app.post('/products/', productController.createProduct)
app.put('/products/:id', productController.updateProduct)
app.delete('/products/:id', productController.deleteProduct)