import products from "./data.js";

// el
const container = document.querySelector(".card-description")


let index = 0;

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products.find(item =>{
    return item.id === Number(productId);
})
console.log(product)

container.innerHTML = `
    <div class="icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart preview-icon"><path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18"/><path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25"/><circle cx="18" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>
            <svg class="back" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left preview-icon"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </div>
        <div class="card">
            <img src="${product.image}" alt="${product.name}" class="img-card">
            <div class="box-descripton">
                <h3>${product.name}</h3>
                <span class="category">${product.category}</span>
                <h3 class="price">${product.price}</h3>
                <p class="text-descripton">پیتزا مخصوص با سس ویژه, پنیر موزارلا, ژامبون,
                    قارچ, فلفل دلمه ای و زیتون.یک انتخاب عالی برای عاشقان پیتزا
                </p>
                <div class="add-items">
                    <span>تعداد</span>
                    <div>
                        <button class="plus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus preview-icon"><path d="M5 12h14"/><path d="M12 5v14"/></svg></button>
                        <span class="number">1</span>
                        <button class="minus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus preview-icon"><path d="M5 12h14"/></svg></button>
                    </div>
                </div>
                <button class="card-btn">افزودن به سبد خرید <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart preview-icon"><path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18"/><path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25"/><circle cx="18" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>
                </button>
            </div>
        </div>
`;

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const number = document.querySelector(".number");
const back = document.querySelector(".back")


plus.addEventListener("click", ()=>{
    index++;
    number.textContent = index;
});
minus.addEventListener("click", ()=>{
    if (index > 0){
        index--;
        number.textContent = index;
    }
    
})

back.addEventListener("click", ()=>{
    window.location.href = "../index.html"
})