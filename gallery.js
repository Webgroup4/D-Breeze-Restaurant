// This part is modal function
var modal = document.getElementById("myModal");
var images = document.querySelectorAll("img[id^='myImg']");

images.forEach(function (img) {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
// end part is modal function