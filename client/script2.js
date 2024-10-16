// async function searchProduct() {
//     try {
//         const url = ‘http://localhost:3001/products/name/’;
//         let searchText = search.value
//         console.log(searchText)
//         let response = await axios.get(`${url}${searchText}`)
//         console.log(response)
//         clearSearch()
//         return;
//     }
//     catch (e) {
//         console.log(`Product not found`)
//     }
// }
const paperBoardsButton = document.querySelector('#paper')
const resultsContainer = document.getElementById('cat-results')
const resultsList = document.getElementById('cat-results-list')
const detailsContainer = document.getElementById('cat-details')
const closeDetailsButton = document.getElementById('close-cat-details-btn')

paperBoardsButton.addEventListener('click', async () => {
    resultsList.innerHTML = ''
    resultsContainer.classList.remove('hidden')

    try {
        const response = await fetch('http://localhost:3001/products/')
        const products = await response.json()

        const paperBoard = [{ paperBoard[0]._id }]

        const filteredProducts = products.filter(product => product.supplyType === paperBoard)

        // Check if there are products to display
        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const resultItem = document.createElement('div')
                resultItem.classList.add('result-item')
                resultItem.innerHTML = `
                    <h4>${product.productName}</h4>
                    <p>${product.description}</p>
                    <img src="${product.imageURL || ''}" alt="${product.productName}" />
                    <p>Price: ${product.price}</p>
                    <button class="view-product-btn" data-id="${product._id}">Details</button>
                `
                resultsList.appendChild(resultItem)
            })
        } else {
            resultsList.innerHTML = '<p>No results found.</p>' // Display message if no products found
        }
    } catch (error) {
        console.error('Error fetching products:', error)
        resultsList.innerHTML = '<p>Error fetching results. Please try again.</p>'
    }
})

// Event listener for product details
resultsList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('view-product-btn')) {
        const productId = e.target.dataset.id

        try {
            const response = await fetch(`http://localhost:3001/products/${productId}`)
            const product = await response.json()

            // Populate the details container with product data
            document.getElementById('catProductName').textContent = product.productName
            document.getElementById('CatBrands').textContent = product.brandId
            document.getElementById('CatProductImg').src = product.imageURL || ''
            document.getElementById('CatStock').textContent = `Stock: ${product.stock}`
            document.getElementById('CatAvailable').textContent = `Available: ${product.isAvailable ? 'Yes' : 'No'}`
            document.getElementById('cat-price').textContent = `Price: ${product.price}`
            document.getElementById('cat-description').textContent = product.description

            detailsContainer.classList.remove('hidden')
        } catch (error) {
            console.error('Error fetching product details:', error)
        }
    }
})

// Close details button
closeDetailsButton.addEventListener('click', () => {
    detailsContainer.classList.add('hidden') 
})

//     const { default: products } = await import('../seed/products.js');
//     const filteredProducts = products.filter(product => product.supplyType === paperBoard[0]._id);

//     if (filteredProducts.length > 0) {
//         filteredProducts.forEach(product => {
//             const resultItem = document.createElement('div');
//             resultItem.classList.add('result-item');
//             resultItem.innerHTML = `
//                 <h4>${product.productName}</h4>
//                 <p>${product.description}</p>
//                 <img src="${product.imageURL || ''}" alt="${product.productName}" />
//                 <p>Price: ${product.price}</p>
//                 <button class="view-product-btn" data-id="${product._id}">Details</button>
//             `;
//             resultsList.appendChild(resultItem);
//         });
//     } else {
//         resultsList.innerHTML = '<p>No results found.</p>';
//     }
// });

// resultsList.addEventListener('click', async (e) => {
//     if (e.target.classList.contains('view-product-btn')) {
//         const productId = e.target.dataset.id
       
//         const product = products.find(p => p._id === productId); // Find the product by ID

//         if (product) {
//             // Populate the details container with product data
//             document.getElementById('catProductName').textContent = product.productName
//             document.getElementById('CatBrands').textContent = product.brandId // Adjust based on your API
//             document.getElementById('CatProductImg').src = product.imageURL || ''
//             document.getElementById('CatStock').textContent = `Stock: ${product.stock}`
//             document.getElementById('CatAvailable').textContent = `Available: ${product.isAvailable ? 'Yes' : 'No'}`
//             document.getElementById('cat-price').textContent = `Price: ${product.price}`
//             document.getElementById('cat-description').textContent = product.description

//             detailsContainer.classList.remove('hidden') // Show product details
//         }
//     }
// });

// // Close details button
// closeDetailsButton.addEventListener('click', () => {
//     detailsContainer.classList.add('hidden'); // Hide details
// });