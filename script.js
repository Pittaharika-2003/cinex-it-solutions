const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

card.addEventListener("touchstart", () => {
card.classList.toggle("active");
});

});

const typeBtns = document.querySelectorAll(".type-btn");
const works = document.querySelectorAll(".work-item");

let activeType = "posters";

function showWorks(){

works.forEach(work => {

if(work.classList.contains(activeType)){
work.style.display = "block";
}

else{
work.style.display = "none";
}

});

}

/* TYPE SWITCH */

typeBtns.forEach(btn => {

btn.addEventListener("click", () => {

typeBtns.forEach(b => b.classList.remove("active"));

btn.classList.add("active");

activeType = btn.dataset.type;

showWorks();

});

});

/* DEFAULT LOAD */

showWorks();

/* LIGHTBOX */

const posters = document.querySelectorAll(".work-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

posters.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";

lightboxImg.src = img.src;

});

});

closeLightbox.addEventListener("click", () => {

lightbox.style.display = "none";

});

/* MOBILE MENU */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});


/* ACTIVE NAV LINK ON SCROLL */

const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach((section) => {

const sectionTop = section.offsetTop - 100;
const sectionHeight = section.clientHeight;

if(scrollY >= sectionTop){
current = section.getAttribute("id");
}

});

navLink.forEach((link) => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});



const processCards = document.querySelectorAll(".process-card");

processCards.forEach(card => {

card.addEventListener("click", function(){

this.classList.toggle("flip");

});

});

