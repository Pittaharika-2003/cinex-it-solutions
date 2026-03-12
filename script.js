const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

card.addEventListener("touchstart", () => {
card.classList.toggle("active");
});

});
const clientBtns = document.querySelectorAll(".client-btn");
const typeBtns = document.querySelectorAll(".type-btn");
const works = document.querySelectorAll(".work-item");

let activeClient = "sanjeevani";
let activeType = "posters";

function showWorks(){

works.forEach(work => {

if(work.classList.contains(activeClient) &&
   work.classList.contains(activeType)){

work.style.display = "block";

}
else{
work.style.display = "none";
}

});

}


/* CLIENT SWITCH */

clientBtns.forEach(btn => {

btn.addEventListener("click", () => {

clientBtns.forEach(b => b.classList.remove("active"));
btn.classList.add("active");

activeClient = btn.dataset.client;

/* reset to posters */

activeType = "posters";

typeBtns.forEach(b => b.classList.remove("active"));
document.querySelector('[data-type="posters"]').classList.add("active");

showWorks();

});

});


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
