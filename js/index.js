// Change Top nav background class on scroll
const topNav = document.getElementById("topNav");

document.addEventListener("scroll", function (evt) {
  /**
   * If the scroll Y is >= 275, we add the scrolled class to the top nav
   * else we remove the clasee
   */
  if (window.scrollY >= 275) {
    topNav.classList.add("scrolled");
  } else {
    topNav.classList.remove("scrolled");
  }
});




const slides = document.querySelectorAll(".slide");
let indicators = document.querySelectorAll(".indicator");

let currentslide = 0; //this tells us what slide is on the screen
let maxslide = slides.length - 1; //this is the last slide or the index of the last slide


//function to set currentslide at begginix if it has reach end 

function nextslide(){
  if (currentslide === maxslide){
    currentslide = 0
  }else{
    ++currentslide;
  }

  //remove the active classlist for any slide

indicators.forEach((indicator) => indicator.classList.remove("active"));

//adds the active classlist to current slide

indicators[currentslide].classList.add("active");

slides.forEach((slide, index) =>{
  slide.style.transform = `translate(${(index - currentslide) * 100}%)`;
})

}
setInterval(nextslide, 3000);




const containerAreas = document.querySelectorAll(".container-area");
const tIndicators = document.querySelectorAll(".t-indicator")

let currentcontainerArea = 0;
let maxcontainerArea = containerAreas.length - 1;


function nextcontainerArea(){
  if(currentcontainerArea === maxcontainerArea){
    currentcontainerArea = 0
  }else{
    ++currentcontainerArea;
  }

  tIndicators.forEach((tIndicator) => tIndicator.classList.remove("active"));


  tIndicators[currentcontainerArea].classList.add("active");

  containerAreas.forEach((containerArea, index) =>{
    containerArea.style.transform = `translate(${(index - currentcontainerArea)* 100}%)`;
  })

}
setInterval(nextcontainerArea, 3000);