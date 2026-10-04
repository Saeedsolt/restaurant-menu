import products from "./data.js";

// el
const back = document.querySelector(".back-btn");
const productsContainer = document.querySelector(".container-products")
const deletIcon = document.querySelector(".delete-shopping-card")
const home = document.querySelector(".home");
const priceSpan = document.querySelector(".price-span")


let index = 0;
let productCard;

try{
    productCard = JSON.parse(localStorage.getItem("card") || "[]");
} catch{
    productCard = []
}


// delete cart
deletIcon.addEventListener("click",()=>{
    localStorage.removeItem("card");
    location.reload();
});


// back
back.addEventListener("click",()=>{
    window.location.href = "../index.html"
});


home.addEventListener("click", ()=>{
    window.location.href = "../index.html"
})


// add cart top shopping card
const addProductToShoppingCard = function(product){
    if(product){
    product.forEach((item)=>{
    productsContainer.innerHTML += `
                <section class="product-shopping-card" data-id="${item.id}">
                <div  class="deleteing-product">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash preview-icon"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </div>
                <div class="data-img">
                    <div class="product-data">
                        <h3>${item.name}</h3>
                        <span>${item.price}تومان</span>
                    <div class="add-index">
                        <button class="plus"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus preview-icon"><path d="M5 12h14"/><path d="M12 5v14"/></svg></button>
                        <span class="number">${item.quantiti}</span>
                        <button class="minus"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus preview-icon"><path d="M5 12h14"/></svg></button>
                        </div>
                        </div>
                        <img src="${item.image}" alt="" class="img-shop">
                        </div>
                        </section>
                        `
                    });
                    const minus = document.querySelector(".minus");
                    const plus = document.querySelector(".plus");
                    const number = document.querySelector(".number");
                    const deleteProduct = document.querySelector(".deleteing-product");
                    const boxProduct = document.querySelector(".container-products")
                    
                    // add
                    plus.addEventListener("click", ()=>{
                        index++;
                        number.textContent = index;
                        
                    });
                    
                    minus.addEventListener("click", ()=>{
                        if (index > 0){
                            index--;
                            number.textContent = index;
                        }
                        });
                        
                    // delete product
                    boxProduct.addEventListener("click", (e)=>{
                        if(e.target.closest(".deleteing-product")){
                            const cartProduct = e.target.closest(".product-shopping-card");
                            const idProduct = cartProduct.dataset.id;
                            
                            const getItem = productCard.filter((item)=>{
                                return item.id !== Number(idProduct);
                            })
                            localStorage.setItem("card", JSON.stringify(getItem))
                            location.reload()
                        }
                        
                    })
                    


}
}

// payment
const payment = function(product){
    product.forEach(item=>{
        const priceNumber = item.price;
        persianToEnglish(priceNumber)
        console.log(persianToEnglish);
        
        
    })
}

payment(productCard);

function persianToEnglish(str) {
    return str.replace(/[۰-۹]/g, (digit) =>
        "۰۱۲۳۴۵۶۷۸۹".indexOf(digit)
    );
}




addProductToShoppingCard(productCard);


