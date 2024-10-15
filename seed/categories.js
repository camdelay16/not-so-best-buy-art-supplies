const db = require('../db')
const { Category } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const categories = [
        {
            supplyType: `Papers & Boards`,
            description: `A variety of paper and board products for drawing, painting, and crafting, including sketch pads, watercolor paper, and canvas boards.`,
        },
        {
            supplyType: `Tools & Supplies`,
            description: `Essential tools and supplies for artists, including brushes, palettes, and other equipment for various art techniques.`,
        },
    ]

    await Category.insertMany(categories)
    console.log('created categories')
}

const run = async () => {
    await main()
    db.close()
}

run()