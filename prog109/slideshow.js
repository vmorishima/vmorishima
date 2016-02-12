// JavaScript source code
var myImages = [
    "http://40.media.tumblr.com/bc8582e32b8aa99db0b93b7e5a3543ac/tumblr_n43plwiQDl1qh66wqo2_1280.jpg",
    "http://36.media.tumblr.com/872e26f9d4aeb8cfbf135f9c3910a0be/tumblr_n43plwiQDl1qh66wqo9_1280.jpg",
    "http://41.media.tumblr.com/2c846f79d3cbe6d07569f0f31f512095/tumblr_n43plwiQDl1qh66wqo3_1280.jpg",
    "http://41.media.tumblr.com/0784174ce5b366fb15c18101e6fe9cca/tumblr_n43plwiQDl1qh66wqo6_1280.jpg",
    "http://40.media.tumblr.com/cfc29e7f2e51ab477029f6aca65f83a8/tumblr_n43plwiQDl1qh66wqo10_1280.jpg"
];
var captionImages = ["tongue out!", "going on an adventure!", "sleepy!", "cuddle time!", "little toes!"];
var index = 0;
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("previous");

function autoSlide() {
    if (document.getElementById("autoRun").checked) {
        next();
    }
}
setInterval(autoSlide, 2000);
function next() {
    if (myImages.length == index + 1) {
        index = 0;
    }
    else {
        index++;
    }
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt = captionImages[index];
    document.getElementById("caption").textContent = captionImages[index];
}
function prev() {
    if (index==0) {
        index = myImages.length - 1;
    }
    else {
        index--;
    }
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt = captionImages[index];
    document.getElementById("caption").textContent = captionImages[index];
}
nextButton.addEventListener("click", next, false);
prevButton.addEventListener("click", prev, false);