
// دسته بندی
/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffc857" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-stacked preview-icon"><path d="M11 13H7"/><path d="M19 9h-4"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="15" y="5" width="4" height="12" rx="1"/><rect x="7" y="8" width="4" height="9" rx="1"/></svg> */
// خانه
{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffc857" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house preview-icon"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg> */}
// سبد خرید
{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffc857" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart preview-icon"><path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18"/><path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25"/><circle cx="18" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg> */}
// پروفایل
{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffc857" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user preview-icon"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> */}



// el
const menuItem = document.querySelectorAll(".item-menu");
menuItem.forEach(item => {
    item.addEventListener("click", ()=>{
        menuItem.forEach(item => item.classList.remove("active"))
        item.classList.add("active")
    })
})