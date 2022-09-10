
var additemid = 0;
function addtoitinerary (item){
    additemid += 1;
    var selectedItem = document.createElement("div");
    selectedItem.classList.add("img1");
    selectedItem.setAttribute("class", additemid);
    var img = document.createElement("img");
    img.setAttribute("src", item.children[0].currentSrc);
    var cartItems = document.getElementsById("title");
    selectedItem.append(img);
    cartItems.append(selectedItem);
}

const hamburger = document.querySelector(".hamburger");
const loginCart = document.querySelector(".login-cart");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    loginCart.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach( n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    loginCart.classList.remove("active")
}) )

//Next and previous button controls
let slideIndex = 1;
showSlides(slideIndex);

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
  let slides = document.getElementsByClassName("sliderfirst");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//adding to cart
let carts = document.querySelectorAll(".addToCart");


for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
    })
}

function onloadcartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");

    if(productNumbers){
        document.querySelector("#Itinerary-icon span").textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector("#Itinerary-icon span").textContent = productNumbers + 1;
    } else{
        localStorage.setItem("cartNumbers", 1);
        document.querySelector("#Itinerary-icon span").textContent = 1;
    }

    setitems(product);
}

function setitems(product){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    console.log("My cartItems are", cartItems);

    if(cartItems != null){
        cartItems[product.tag].inCart += 1;
    } else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

   

    localStorage.setItem("productInCart", JSON.stringify
    (cartItems))
}


