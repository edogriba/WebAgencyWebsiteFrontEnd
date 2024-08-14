const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const upLine = document.querySelector(".up-line");
const downLine = document.querySelector(".down-line");
const mediumLine = document.querySelector(".medium-line");

 burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    })
    downLine.classList.toggle("fade-away");
    upLine.classList.toggle("rotate-left");
    mediumLine.classList.toggle("rotate-right");

 });
 
