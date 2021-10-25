const info = document.querySelector(".info");
const body = document.querySelector(".body");
const btnOpenPopup = document.querySelector(".info-open-btn");
const btnClosePopup = document.querySelector(".info-close-btn");

btnOpenPopup.addEventListener("click", () => {
    info.style.display = "block";
    body.style.overflow = "hidden";
});

btnClosePopup.addEventListener("click", () => {
    info.style.display = "none";
    body.style.overflow = "auto";
});
