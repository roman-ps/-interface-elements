var cat1 = document.querySelector(".menu__item-cat1");
var submenu = document.querySelector(".menu__submenu");
var subItem = document.querySelector(".menu__item-submenu--sub");
var submenu2 = document.querySelector(".menu__submenu2");

cat1.addEventListener("mouseover", function(event) {
  event.preventDefault();
  submenu.classList.add("menu__submenu-show");
})

cat1.addEventListener("mouseout", function(event) {
  event.preventDefault();
  submenu.classList.remove("menu__submenu-show");
})

subItem.addEventListener("mouseover", function(event) {
  event.preventDefault();
  submenu2.classList.add("menu__submenu-show");
})

subItem.addEventListener("mouseout", function(event) {
  event.preventDefault();
  submenu2.classList.remove("menu__submenu-show");
})