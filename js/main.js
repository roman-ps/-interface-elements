'use strict';

function hideSliders() {
  var images = document.querySelectorAll('.slider2');
  for (var i = 0; i < images.length; ++i) {
    images[i].style.display = 'none';
  }
}

function slider1() {
  hideSliders();
  var slide1 = document.querySelector(".slider--first2");
  slide1.style.display = "flex";
}

function slider2() {
  hideSliders();
  var slide2 = document.querySelector(".slider--second2");
  slide2.style.display = "flex";
}

function slider3() {
  hideSliders();
  var slide3 = document.querySelector(".slider--third2");
  slide3.style.display = "flex";
}

var img = document.querySelectorAll(".slider-img");
var prev = document.querySelector(".btn--prev");
var next = document.querySelector(".btn--next");
var i = 0;

next.addEventListener("click", function(event) {
  event.preventDefault();
  img[i].classList.remove("slider-img__show"); 
  i++;
  if (i >= img.length) {
    i = 0;
    img[i].classList.add("slider-img__show");
  }
  else {
    img[i].classList.add("slider-img__show"); 
  }
})

prev.addEventListener("click", function(event) {
  event.preventDefault();
  img[i].classList.remove("slider-img__show");
  i--;
  if (i < 0) {
    i = img.length-1;
    img[i].classList.add("slider-img__show");
  }
  else {
    img[i].classList.add("slider-img__show");
  }
})

var karusel2 = document.querySelector(".slider-container--karusel2");
var prev2 = document.querySelector(".btn--prev2");
var next2 = document.querySelector(".btn--next2");

next2.addEventListener("click", function(event) {
  event.preventDefault();
  if (karusel2.classList.contains("karusel-margin1")) {
    karusel2.classList.remove("karusel-margin1");
    karusel2.classList.add("karusel-margin2");
  } else if (karusel2.classList.contains("karusel-margin2")) {
    karusel2.classList.remove("karusel-margin2");
  } else {
  karusel2.classList.add("karusel-margin1");
  }
})

prev2.addEventListener("click", function(event) {
  event.preventDefault();
  if (karusel2.classList.contains("karusel-margin1")) {
    karusel2.classList.remove("karusel-margin1")
  } else if (karusel2.classList.contains("karusel-margin2")) {
    karusel2.classList.remove("karusel-margin2");
    karusel2.classList.add("karusel-margin1");
  } else {
    karusel2.classList.add("karusel-margin2");
  }
})
