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