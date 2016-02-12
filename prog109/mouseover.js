/*recipe for events
find element in html
ie var mybutton= get blah blah
*/
var myImage = document.getElementById("changeImage");


function bigImage() {
    myImage.src = "http://i.schoolido.lu/cards/transparent/579idolizedTransparent.png";
    myImage.style.width = "500px";
}

function smallImage() {
    myImage.src = "http://i.schoolido.lu/cards/transparent/579Transparent.png";
    myImage.style.width = "400px";
}

function clickMe() {
    alert("click!");
}

myImage.addEventListener("mouseover", bigImage, false);
myImage.addEventListener("mouseout", smallImage, false);
myImage.addEventListener("click", clickMe, false);