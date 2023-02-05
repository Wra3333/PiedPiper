// бургер
let burgerBtn = document.querySelector(".header__burger")
let burgerMenu = document.querySelector(".header__nav")
burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("header__burger_active")
    document.body.classList.toggle("scroll-hidden")
    burgerMenu.classList.toggle("header__nav_active");
})
burgerMenu.addEventListener("click", function ({ target }) {
    if (target == null) return;
    if (target.closest("a")) {
        document.body.classList.remove("scroll-hidden")
        burgerMenu.classList.remove("header__nav_active")
        burgerBtn.classList.remove("header__burger_active")
    }
})