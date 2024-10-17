const searchButton = document.querySelector(`#search-button`)
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
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');

searchButton.addEventListener(`click`, async () => {
    await searchProduct()
})
search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { searchProduct() }
})

function clearSearch() {
    search.value = "";
}

async function loadProduct(searchText) {
    const url = `http://localhost:3001/products/name/${searchText}`;
    const res = await fetch(`${url}`);
    const data = await res.json();
if (data.Response == true) displayProductList(data.Search)
}

function findProduct(){
    let searchTerm = (search.value).trim();
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        loadProduct(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
}

function displayProductList(product){
    searchList.innerHTML = "";
    for(let idx = 0; idx < product.length; idx++){
        let productListItem = document.createElement('div');
        productListItem.dataset.id = product[idx].id; 
        productListItem.classList.add('search-list-item');

        productListItem.innerHTML = `
        <div class = "search-item-info">
            <h3>${product[idx].productName}</h3>
        </div>
        `;
        searchList.appendChild(productListItem);
    }
    searchProduct();
}


async function searchProduct(searchTerm) {
    const url = `http://localhost:3001/products/name/${searchTerm}`
    const response = await fetch(url);

        results.style.display = `grid`
        productDetails.style.display = `grid`

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

        return;
}