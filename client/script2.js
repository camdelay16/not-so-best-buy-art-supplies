document.addEventListener('DOMContentLoaded', () => {
    const paperButton = document.querySelector('#paper')
    const toolsButton = document.querySelector('#tools')
    const resultsList = document.getElementById('cat-results-list')
    const resultsContainer = document.getElementById('cat-results')
    const detailsContainer = document.getElementById('cat-details')
    const closeDetailsButton = document.getElementById('close-cat-details-btn')

    // Function to handle button clicks
    const filterResultsBySupplyType = async (supplyTypeId) => {
        resultsList.innerHTML = ''
        try {
            const response = await fetch('http://localhost:3001/products/')
            const products = await response.json()

            // Filter products by supplyType
            const filteredProducts = products.filter(product => product.supplyType === supplyTypeId)
            resultsContainer.classList.remove('hidden')

            // Check if there are products to display
            if (filteredProducts.length > 0) {
                filteredProducts.forEach(product => {
                    const resultItem = document.createElement('div')
                    resultItem.classList.add('result-item')
                    resultItem.innerHTML = `
                        <h6>${product.productName}</h6>
                        <img src="${product.imageURL || ''}" alt="${product.productName}" />
                        <p>${product.price}</p>
                        <button class="view-product-btn" data-id="${product._id}">Details</button>
                    `
                    resultsList.appendChild(resultItem)
                })
            } else {
                resultsList.innerHTML = '<p>No results found.</p>'
            }
        } catch (error) {
            console.error('Error fetching products:', error)
            resultsList.innerHTML = '<p>Error fetching results. Please try again.</p>'
        }
    }

    // Event listener for paperButton
    paperButton.addEventListener('click', () => {
        filterResultsBySupplyType('670fbd9f975dacd92f675251')
    })

    // Event listener for toolsButton
    toolsButton.addEventListener('click', () => {
        filterResultsBySupplyType('670fbd9f975dacd92f675252')
    })

    // Event listener for product details
    resultsList.addEventListener('click', async (e) => {
        if (e.target.classList.contains('view-product-btn')) {
            const productId = e.target.dataset.id
            console.log('Details button clicked for product ID:', productId)

            // Fetch the product details
            try {
                const response = await fetch(`http://localhost:3001/products/${productId}`)
                const product = await response.json()

                // Populate the details container with product data
                document.getElementById('catProductName').textContent = product.productName
                document.getElementById('CatBrands').textContent = product.brandId
                document.getElementById('CatProductImg').src = product.imageURL || ''
                document.getElementById('CatStock').textContent = `Stock: ${product.stock}`
                document.getElementById('CatAvailable').textContent = `Available: ${product.isAvailable ? 'Yes' : 'No'}`
                document.getElementById('cat-price').textContent = `${product.price}`
                document.getElementById('cat-description').textContent = product.description

                // Hide the results and show details
                resultsContainer.classList.add('hidden')
                detailsContainer.classList.remove('hidden')
            } catch (error) {
                console.error('Error fetching product details:', error)
            }
        }
    })

    // Close details button
    closeDetailsButton.addEventListener('click', () => {
        detailsContainer.classList.add('hidden')
        //resultsContainer.classList.remove('hidden') 
    })
})
