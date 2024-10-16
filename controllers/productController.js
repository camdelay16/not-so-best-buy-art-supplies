//Get Index
const { Product } = require('../models')
const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Get Show 
const getProductsById = async (req,res) => {
    try { 
        const { id } = req.params
        const product = await Product.findById(id)
        if (product) {
            return res.json(product)
        }
        return res.status(404).send('Product with that ID not found.')
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

//Get By Name
const getProductsByName = async (req,res) => {
    try {
        const { name } = req.params
        const products = await Product.find({ name: new RegExp(name, 'i') })
        if (products.length > 0) {
            return res.json(products)
        }
        return res.status(404).send('Product with that name not found.')
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

//Get Eco-Friendly Products
const getEcoFriendlyProducts = async (req,res) => {
    try {
        const ecoFriendlyProducts = await Product.find({ isEcoFriendly: true })
        if (ecoFriendlyProducts.length > 0) {
            return res.json(ecoFriendlyProducts)
        }
        return res.status(404).send('No eco friendly products found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Get Water Soluble Products
const getWaterSolubleProducts = async (req,res) => {
    try {
        const waterSolubleProducts = await Product.find({ isWaterSoluble: true })
        if (waterSolubleProducts.length > 0) {
            return res.json(waterSolubleProducts)
        }
        return res.status(404).send('No water soluble products found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Get Child Safe Products
const getChildSafeProducts = async (req, res) => {
    try {
        const childSafeProducts = await Product.find({ isChildSafe: true })
        if (childSafeProducts.length > 0) {
            return res.json(childSafeProducts)
        }
        return res.status(404).send('No child safe products found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Create - Post
const createProduct = async (req,res) => {
    try {
        const product = await new Product(req.body)
        await product.save()
        return res.status(201).json({product})
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

//Update - Put
const updateProduct = async (req,res) => {
    try {
        let { id } = req.params
        let product = await Product.findByIdAndUpdate(id, req.body, { new: true })
        if (product) {
            return res.status(200).json(product)
        }
        throw new Error('Product not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Delete - Delete
const deleteProduct = async (req,res) => {
    try {
        const { id } = req.params
        const deleted = await Product.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Product deleted.')
        }
        throw new Error('Product not found.') 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


module.exports = {
    getAllProducts,
    getProductsById,
    getProductsByName,
    getEcoFriendlyProducts,
    getWaterSolubleProducts,
    getChildSafeProducts,
    createProduct,
    updateProduct,
    deleteProduct
}