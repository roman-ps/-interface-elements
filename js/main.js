function hideSliders() {
  var images = document.querySelectorAll('.slider');
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
