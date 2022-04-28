const selectorImage = document.querySelector(".selector-img");
const selectorDiv = document.querySelector(".country-selector");
const selectorBackground = document.querySelector(".selector-background");
let images = document.querySelectorAll(".country-selector img");

const showHideSelector = function () {
  // console.log("click");
  selectorImage.classList.toggle("active-img");
  selectorDiv.classList.toggle("country-active");
  images[1].classList.toggle("display");
  images[2].classList.toggle("display");
  selectorBackground.classList.toggle("height");
};

selectorImage.addEventListener("click", showHideSelector);
selectorBackground.addEventListener("click", showHideSelector);
