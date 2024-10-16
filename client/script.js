const searchButton = document.querySelector(`.search-button`)
const search = document.querySelector(`#search`)
const results = document.querySelector(`#results`)
const productDetails = document.querySelector('#productDetails')
const productName = document.querySelector('#productName')
const brands = document.querySelector('#brands')
const productImg = document.querySelector('#productImg')
const stock = document.querySelector('#stock')
const available = document.querySelector('#available')
const addToCartBtn = document.querySelector('#add-to-cart-btn')
const price = document.querySelector('#price')
const description = document.querySelector('#description')

searchButton.addEventListener(`click`, async () => {
    await searchProduct()
})
search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { searchProduct() }
})

function clearSearch() {
    search.value = "";
}

async function searchProduct() {
    try {
        const url = 'http://localhost:3001/products/name/';
        let searchText = search.value
        console.log(searchText)
        let response = await axios.get(`${url}${searchText}`)
        console.log(response)

        results.style.display = `flex`
        productDetails.style.display = `flex`

        let pName = response.data.productName
        productName.textContent = `${pName}`

        let pBrands = response.data.brandId
        brands.textContent = `${pBrands}`

        let pImg = response.data.imageURL
        productImg.setAttribute('src', pImg)

        let pStock = response.data.stock
        stock.textContent = `${pStock}`

        let isAvailable = response.data.isAvailable;
        let availableText;
        if (isAvailable === true) {availableText = `Available` }
        else {availableText = `Not Available` };
        available.textContent = `${availableText}`;

        let pPrice = response.data.price
        price.textContent = `${pPrice}`

        let pDescription = response.data.description
        description.textContent = `${pDescription}`

        clearSearch()
        return;
    }
    catch (e) {
        console.log(`Product not found`)

        results.style.display = `none`
        productDetails.style.display = `none`

        clearSearch()
    }
}