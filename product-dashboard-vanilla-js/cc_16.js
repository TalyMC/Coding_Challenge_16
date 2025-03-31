//Task 2
const BASE_URL = 'https://www.course-api.com/javascript-store-products';

function fetchProductsThen() {
    fetch(BASE_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`STOP STOP ERROR: ${response.status}`);
            }
            return response.json();
        })
        .then(products => {
            products.forEach(product => {
                console.log(product.fields.name);
            });
        })
        .catch(err => {
            console.error('Error unable to fetch products:', err);
        });
}
fetchProductsThen();

//Task 3
async function fetchProductsAsync() {
    try {
        const response = await fetch (BASE_URL);
        const products = await response.json();
        displayProducts(products);
    } 
    catch (error) {
        handleError (error)
    }
};

//Task 4
function displayProducts(products) {
    const container = document.getElementById('product-container');
    
    products.slice(0,5).forEach(product => {
        const prodCards = document.createElement('div');
        prodCards.setAttribute('class','product');

    //Product Name
        const prodName = document.createElement('h2');
        prodName.setAttribute('class','product-name');
        prodName.textContent = product.fields.name;

    //Product Price
        const prodPrice = document.createElement('p');
        prodPrice.setAttribute('class','product-price');
        prodPrice.textContent = '$'+ product.fields.price;

    //Product Image
        const prodImage = document.createElement('img');
        prodImage.setAttribute('class', 'product-image');
        prodImage.src = product.fields.image[0].url;
        prodImage.alt = product.fields.name;

        // Append product details 
        prodCards.appendChild(prodName);
        prodCards.appendChild(prodPrice);
        prodCards.appendChild(prodImage);
        container.appendChild(prodCards);

    })
};

//Task 5
function handleError(error) {
    console.error("Error occurred: " + error.message);
};

//Task 6
