import products from "./data.js";
// el
const menuItem = document.querySelectorAll(".item-menu");
const text = document.querySelector(".text-poster")
const inputSearch = document.querySelector(".input-search");
const fillter = document.querySelectorAll(".btn-fillter");
const productsContainer = document.querySelector(".products");

const textPoster = "تجربه یک وعده غذایی لذت بخش";
let index = 0;
// menu nav
menuItem.forEach(item => {
    item.addEventListener("click", ()=>{
        menuItem.forEach(item => item.classList.remove("active"))
        item.classList.add("active")
    })
})

// text poster
const timer =  setInterval(()=>{
    text.textContent += textPoster[index];
    index++;
    if(index === textPoster.length){
        clearInterval(timer)
    }
}, 100)

// input
inputSearch.addEventListener("input", ()=>{
    inputSearch.value = inputSearch.value.replace(/[^a-zA-Z\u0600-\u06FF\s]/g, "")
});

// fillter
// add to cart

function displayProducts(productsArray) {
    productsContainer.innerHTML = "";
    if(productsArray.length === 0){
        productsContainer.innerHTML = `
            <p class="not-found">
                محصولی یافت نشد!
            </p>
        `;
        return;
    }

    productsArray.forEach(product => {
        productsContainer.innerHTML += `
            <div class="product-card" data-id="${product.id}">
                <img src="${product.image}" alt="${product.name}" class="img-product">

                <div class="description">
                    <h4>${product.name}</h4>
                    <span class="category">${product.category}</span>
                    <span class="price">${product.price} تومان</span>
                </div>

                <div class="add-btn">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="20" height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M5 12h14"/>
                        <path d="M12 5v14"/>
                    </svg>
                </div>
            </div>
        `;
    });
}

displayProducts(products)

inputSearch.addEventListener("input", () => {
    const searchValue = inputSearch.value.trim().toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );

    displayProducts(filteredProducts);
});


// decription card
productsContainer.addEventListener("click", (e)=>{
    if(e.target.closest(".add-btn")) return;

    const card = e.target.closest(".product-card");
    if(!card) return;
    const id = card.dataset.id;
    window.location.href = `../product.html?id=${id}`;
})