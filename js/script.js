//preloader
let preloader = document.getElementById('preloader');
window.addEventListener('load',()=>{
    preloader.style.display = "none";
})
//menu toggle
function toggleMenu(){
    const toggleBtn = document.querySelector('.toggle');
    const navigationList = document.querySelector('.navigation');
    toggleBtn.classList.toggle('active')
    navigationList.classList.toggle('active')
}
//background slider
const backSlide = document.querySelector('#slideImg');
var backImg = new Array(
  "images/bg2.jpeg",
  "images/bg3.jpeg",
  "images/bg4.jpeg"
);
var len = backImg.length;
var back = 0;
function backSlider(){
  if(back > len - 1){
    back = 0
  }
  backSlide.src = backImg[back];
  back++;
  setTimeout('backSlider()', 2000)
}
//card slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}
