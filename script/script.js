const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach( n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active")
}) )

document.querySelectorAll(".sliderwrapper").forEach(sliderwrapper =>{
    const items = sliderwrapper.querySelectorAll(".slides");
    
});

const mediaQuery = window.matchMedia('(width: 600px)');


let slideIndex = 1;
showSlides(slideIndex);


/*
// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}
function showSlides(n) {
let i;
let slides = document.getElementsByClassName("slides");
let dots = document.getElementsByClassName("dot");


  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "inline-block";
  dots[slideIndex-1].className += " active";
  }
  */



