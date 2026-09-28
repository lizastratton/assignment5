const hamburgerBtn = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.hamburger-menu');
  

hamburgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show-menu");
    
    if (navMenu.classList.contains("show-menu")) {
      hamburgerBtn.setAttribute("aria-expanded", "true");
    } else {
        hamburgerBtn.setAttribute("aria-expanded", "false");
}
});

document.addEventListener("click", function (event) {
if (!navMenu.contains(event.target) &&          !hamburgerBtn.contains(event.target)) {
         navMenu.classList.remove("show-menu");
         hamburgerBtn.setAttribute("aria-expanded", "false");
}
});

document.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
        navMenu.classList.remove("show-menu");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        hamburgerBtn.focus();
    }
});

