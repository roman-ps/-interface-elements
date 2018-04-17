'use strict';

var OpenSubmenu = document.querySelectorAll(".menu__item--submenu");
var submenu = document.querySelectorAll(".submenu");

OpenSubmenu.addEventListener("mouseover", function(event) {
  event.preventDefault();
  submenu.classList.add("submenu--show");
});


OpenSubmenu.addEventListener("mouseout", function(event) {
  event.preventDefault();
  submenu.classList.remove("submenu--show");
});

//var OpenSubmenu = document.querySelectorAll(".menu__item--submenu");
//var submenu = document.querySelectorAll(".submenu");
//var i;
//
//function opens() {
//  for (i = 0; i < OpenSubmenu.length; i++) {
//  submenu[i].style.display = "flex";
//  }
//}
//
//function closes() {
//  for (i = 0; i < OpenSubmenu.length; i++) {
//  submenu[i].style.display = "none";
//  }
//}