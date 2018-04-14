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
    for (i = 0; i < img.length; ++i) {
      img[i].classList.remove("slider-img__show");
    }
    i = 0;
    img[i].classList.add("slider-img__show");
  }
  else {
    img[i].classList.add("slider-img__show"); 
  }
})

prev.addEventListener("click", function(event) {
  event.preventDefault();
  img[i].style.display = "none";
//  img[i].classList.add("slider-img__hide");
  i--;
  if (i < 0) {
    i = img.length-1;
  }
  img[i].style.display = "block";
//  img[i].classList.add("slider-img__show");
})