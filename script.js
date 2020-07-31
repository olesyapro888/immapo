const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));

// Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) =>
    e.target == modal ? modal.classList.remove("show-modal") : false
);
