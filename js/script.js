// NAVBAR RESPONSIVE
checkbtn = document.querySelector(".checkbtn");
checkbtn.onclick = function() {
    navBar = document.querySelector(".navbar-left");
    navBar.classList.toggle("active");
}

// CARROUSEL FUNCTION
/* const slider = document.querySelector(".slider");
let sliderSection = document.querySelectorAll(".carrousel-content");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".carrousel-content")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all .38s ease";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%"
    }, 380);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".carrousel-content");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all .38s ease";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%"
    }, 380);
}

btnRight.addEventListener("click", function(){
    Next();
})
btnLeft.addEventListener("click", function(){
    Prev();
}) */