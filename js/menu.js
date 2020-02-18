'use strict';

var OpenSubmenu = document.querySelector(".menu__item--submenu");
var submenu = document.querySelector(".submenu");

OpenSubmenu.addEventListener("mouseover", function(event) {
  event.preventDefault();
  submenu.classList.add("submenu--show");
});


OpenSubmenu.addEventListener("mouseout", function(event) {
  event.preventDefault();
  submenu.classList.remove("submenu--show");
});
