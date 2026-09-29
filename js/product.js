import products from "./data.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products.find(item =>{
    return item.id === Number(productId);
})
console.log(product)