
// el
const menuItem = document.querySelectorAll(".item-menu");
const text = document.querySelector(".text-poster")
const inputSearch = document.querySelector(".input-search")

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
})