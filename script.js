const close = document.getElementById("close");
const open = document.getElementById("open");
const comt = document.getElementById("comt");
const modal = document.getElementById("modal");
const comcont = document.getElementById("comcont");

document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));

// Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) =>
    e.target == modal ? modal.classList.remove("show-modal") : false
);

// Show comcont
comt.addEventListener("click", () => comcont.classList.add("show-comcont"));

// Hide comcont
close.addEventListener("click", () => comcont.classList.remove("show-comcont"));

// Hide comcont on outside click
window.addEventListener("click", (e) =>
    e.target == comcont ? comcont.classList.remove("show-comcont") : false
);