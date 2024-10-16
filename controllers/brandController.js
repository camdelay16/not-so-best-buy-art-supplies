// Get Index
const { Brand } = require('../models')
const getAllBrands = async (req,res) => {
    try {
        const brands = await Brand.find()
        res.json(brands)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Get Show 
const getBrandsById = async (req,res) => {
    try { 
        const { id } = req.params
        const brand = await Brand.findById(id)
        if (brand) {
            return res.json(brand)
        }
        return res.status(404).send('Brand with that ID not found.')
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

//Get By Name
const getBrandsByName = async (req,res) => {
    try {
        const { name } = req.params
        const brands = await Brand.find({ name: new RegExp(name, 'i') })
        if (brands.length > 0) {
            return res.json(brands)
        }
        return res.status(404).send('Brand with that name not found.')
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

//Create - Post
const createBrand = async (req,res) => {
    try {
        const brand = await new Brand(req.body)
        await brand.save()
        return res.status(201).json({brand})
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

//Update - Put
const updateBrand = async (req,res) => {
    try {
        let { id } = req.params
        let brand = await Brand.findByIdAndUpdate(id, req.body, { new: true })
        if (brand) {
            return res.status(200).json(brand)
        }
        throw new Error('Brand not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Delete - Delete
const deleteBrand = async (req,res) => {
    try {
        const { id } = req.params
        const deleted = await Brand.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Brand deleted.')
        }
        throw new Error('Brand not found.') 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllBrands,
    getBrandsById,
    getBrandsByName,
    createBrand,
    updateBrand,
    deleteBrand
}
