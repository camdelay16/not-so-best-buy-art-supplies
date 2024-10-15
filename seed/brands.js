const db = require('../db')
const { Brand } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const brands = [
        {
            brand_name: "Strathmore",
            url: "https://www.dickblick.com/brands/strathmore/",
        },
        {
            brand_name: "Copic",
            url: "https://www.dickblick.com/brands/copic/",
        },
        {
            brand_name: "Sahura",
            url: "https://www.dickblick.com/brands/sakura/",
        }
    ]

    await Brand.insertMany(brands)
    console.log('created brands')
}

const run = async () => {
    await main()
    db.close()
}

run()