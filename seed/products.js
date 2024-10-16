const db = require('../db')
const { Category, Brand, Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const paperBoard = await Category.find({ supplyType: `Papers & Boards` })
    const toolsSupply = await Category.find({ supplyType: `Tools & Supplies` })
    const strathmore = await Brand.find({ brand_name: `Strathmore` })
    const copic = await Brand.find({ brand_name: `Copic` })
    const sakura = await Brand.find({ brand_name: `Sakura` })

    const products = [
        {
            productName: `Strathmore Hardbound Toned Sketch Journal`,
            supplyType: paperBoard[0]._id,
            brandId: strathmore[0]._id,
            price: `$24.78`,
            isAvailable: true ,
            stock: `444444`,
            imageURL: `https://www.jerrysartarama.com/media/catalog/product/cache/ecb49a32eeb5603594b082bd5fe65733/t/o/toned-tan-hardcover-art-journal-8.5x11in-400-series-strathmore-sw-v11186.jpg`,
            isEcoFriendly: true ,
            isWaterSoluble: false ,
            isChildSafe: true ,
            description: `Strathmore's Hardbound Art Journals offer artists more choices in a hardbound format, such as toned sketch paper, Smyth-sewn binding that allows the books to lay flat when open, and a lightly textured, matte, chocolate brown cover. Available in two sizes, these journals contain 128 pages of 80 lb (118 gsm) 400 Series sketch paper in Warm Tan or Cool Gray, ideal for light and dark media. Pair them with graphite, chalk, charcoal, sketching sticks, markers, china markers, colored pencils, pens, and white gel pens. The 100% recycled paper contains 30% post-consumer fiber, acid-free.`, 
        },
        {
            productName: `Strathmore 400 Series Recycled Toned Sketch Wirebound Pads`,
            supplyType: paperBoard[0]._id,
            brandId: strathmore[0]._id,
            price: `$22.39`,
            isAvailable: true ,
            stock: `333333`,
            imageURL: `https://www.jerrysartarama.com/media/catalog/product/cache/ecb49a32eeb5603594b082bd5fe65733/g/r/gray-5.5x8.5in-strathmore-400-toned-sketch-paper-pads-ls-v11180.jpg`,
            isEcoFriendly: true ,
            isWaterSoluble: false ,
            isChildSafe: true ,
            description: `Experience unique sketching and drawing possibilities with Strathmore 400 Series Recycled Toned Sketch paper. Perfect for both light and dark media, the paper is excellent for creating white highlights and dark shadows with graphite, chalk, charcoal, sketching sticks, markers, china markers, colored pencils, pens, and white gel pens. Ideal for experimenting, quick studies, sketching, life drawing, and journaling, Strathmore 400 Series Recycled Toned Sketch paper is made from 100% recycled, 30% post-consumer fiber.`,
        },
        {
            productName: `Strathmore 500 Sequential Series Bristol - Loose Sheets`,
            supplyType: paperBoard[0]._id,
            brandId: strathmore[0]._id,
            price: `$60.94`,
            isAvailable: true ,
            stock: `222222`,
            imageURL: `https://www.jerrysartarama.com/media/catalog/product/cache/ecb49a32eeb5603594b082bd5fe65733/0/v/0v00733000000-st-01-strathmore_2.jpg`,
            isEcoFriendly: true ,
            isWaterSoluble: false ,
            isChildSafe: true ,
            description: `Created in 1893, this acid-free, 100% cotton 2-ply bristol is an industry standard. Choose the toothy finish of the Vellum Surface for use with graphite pencil, colored pencil, sketching sticks, and specialty pens and markers. The Plate Surface has an ultra-smooth finish that is ideal for detail work using traditional pen-and-ink tools, specialty pens and markers, and airbrush. The Semi-Smooth Surface is slightly textured surface making it well-suited for pencil, pen-and-ink tools, and specialty pens and markers. Pads and packs each contain 24 sheets.`,
        },
        {
            productName: `Copic Sketch Marker Set - Set of 72`,
            supplyType: toolsSupply[0]._id,
            brandId: copic[0]._id,
            price: `$403.44`,
            isAvailable: true ,
            stock: `111111`,
            imageURL: `https://www.jerrysartarama.com/media/catalog/product/cache/ecb49a32eeb5603594b082bd5fe65733/c/-/c-set-of-72-sketch-markers-copic-ls-80450.jpg`,
            isEcoFriendly: true ,
            isWaterSoluble: true ,
            isChildSafe: false ,
            description: `The choice of professionals worldwide, the Copic marker offers outstanding performance in all areas of design and illustration. Two versatile tips produce a range of strokes from fine lines to wide color fills. The roll-proof flat barrel is filled with alcohol based ink for a long life. Copic Sketch Markers are perfect for cartoon illustration, as well as fashion design. The Copic Sketch marker has a brush nib and a broad nib. Fast-drying, permanent, non-toxic, and toner compatible.`,
        },
        {
            productName: `Sakura Pigma Micron Pens - Set of 72, Black, Assorted Sizes`,
            supplyType: toolsSupply[0]._id,
            brandId: sakura[0]._id,
            price: `$132.98`,
            isAvailable: true ,
            stock: `555555`,
            imageURL: `https://www.sakuraofamerica.com/wp-content/uploads/2020/07/Pigma_micron4.jpg`,
            isEcoFriendly: true ,
            isWaterSoluble: true ,
            isChildSafe: true ,
            description: `An enduring favorite for detailed drawing and writing, the Sakura Pigma Micron contains archival-quality pigment ink that flows smoothly, producing rich, fade-resistant lines. Needle-point plastic tips offer precision and reliability—a hint of flex allows for subtle line variations. Ink dries quickly to a permanent, waterproof finish, making them a trusted choice for mixed-media artwork and documents that demand longevity.`,
        },
        {
            productName: `Williamsburg Handmade Oil Paints - Basic Painting Set, Set of 13 colors`,
            supplyType: toolsSupply[0]._id,
            brandId: copic[0]._id,
            price: `$146.63`,
            isAvailable: false ,
            stock: `777777`,
            imageURL: `https://images.ctfassets.net/f1fikihmjtrp/4AvyDaYELJvLVrA0BPLV86/cf505f46ac5b125fc06d61438c808524/01571-1019-1-4ww.jpg?fit=pad`,
            isEcoFriendly: true ,
            isWaterSoluble: false ,
            isChildSafe: false ,
            description: `Dedicated to handmade integrity, Williamsburg Handmade Oils are crafted by skilled American artisans using top-quality pigments from around the world. Each of the more than 140 colors in the line possesses a unique consistency and texture — some are slightly gritty, while others are extremely smooth. This is what makes Williamsburg Handmade Oils so unique and prized by the painters who choose them. Colors are made in small batches no larger than five gallons at a time to ensure the highest level of control.`,
        }
    ]

    await Product.insertMany(products)
    console.log('Created products.')
}

const run = async () => {
    await main()
    db.close()
}

run()