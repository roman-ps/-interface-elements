var itemOpenSubmenu = document.querySelector(".menu__item--submenu");
var submenu = document.querySelector(".menu__submenu");

itemOpenSubmenu.addEventListener("mouseover", function(event) {
  event.preventDefault();
  submenu.classList.add("menu__submenu-show");
})

itemOpenSubmenu.addEventListener("mouseout", function(event) {
  event.preventDefault();
  submenu.classList.remove("menu__submenu-show");
})
