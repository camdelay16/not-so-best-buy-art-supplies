// Get Index
const { Category } = require('../models')
const getAllCategories = async (req,res) => {
    try {
        const categories = await Category.find()
        res.json(categories)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Get Show 
const getCategoriesById = async (req,res) => {
    try { 
        const { id } = req.params
        const category = await Category.findById(id)
        if (category) {
            return res.json(category)
        }
        return res.status(404).send('Category with that ID not found.')
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

//Get By Name
const getCategoriesByName = async (req,res) => {
    try {
        const { name } = req.params
        const categories = await Category.find({ name: new RegExp(name, 'i') })
        if (categories.length > 0) {
            return res.json(categories)
        }
        return res.status(404).send('Category with that name not found.')
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

//Create - Post
const createCategory = async (req,res) => {
    try {
        const category = await new Category(req.body)
        await category.save()
        return res.status(201).json({category})
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

//Update - Put
const updateCategory = async (req,res) => {
    try {
        let { id } = req.params
        let category = await Category.findByIdAndUpdate(id, req.body, { new: true })
        if (category) {
            return res.status(200).json(category)
        }
        throw new Error('Category not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Delete - Delete
const deleteCategory = async (req,res) => {
    try {
        const { id } = req.params
        const deleted = await Category.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Category deleted.')
        }
        throw new Error('Category not found.') 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllCategories,
    getCategoriesById,
    getCategoriesByName,
    createCategory,
    updateCategory,
    deleteCategory
}