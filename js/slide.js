let curPos = 0;
let position = 0;
const IMAGE_WIDTH = 75;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const imgBox = document.querySelector(".imgbox");

function prev() {
    if (curPos > 0) {
        nextBtn.removeAttribute("disabled");
        position += IMAGE_WIDTH;
        imgBox.style.transition = "transform 0.3s ease-in";
        imgBox.style.transform = `translateX(${position}vw)`;
        curPos = curPos - 1;
    }
    if (curPos == 0) {
        prevBtn.setAttribute("disabled", "true");
    }
}

function next() {
    if (curPos < 3) {
        prevBtn.removeAttribute("disabled");
        position -= IMAGE_WIDTH;
        imgBox.style.transition = "transform 0.3s ease-in";
        imgBox.style.transform = `translateX(${position}vw)`;
        curPos = curPos + 1;
    }
    if (curPos == 3) {
        nextBtn.setAttribute("disabled", "true");
    }
}

function init() {
    prevBtn.setAttribute("disabled", "true");
    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);
}

init();