var imageno = 1;
displayimg(imageno);

function nextimg(n) {
    displayimg(imageno += n)
}

function currentSlide(n) {
    displayimg(imageno = n)
}

function displayimg(n) {
    var i;
    var image = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");

    if (n > image.length) {
        imageno = 1;
    }

    if (n < 1) {
        imageno = image.length;
    }

    for (i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    image[imageno - 1].style.display = "block";
    dots[imageno - 1].className += " active";

}




$(function () {
    $(".toggle").on("click", function () {
        if ($(".menu").hasClass("active")) {
            $(".menu").removeClass("active");
            $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
        } else {
            $(".menu").addClass("active");
            $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
        }
    })
});





var imageno = 1;
displayimg(imageno);

function nextimg(n) {
    displayimg(imageno += n);
}

function currentSlide(n) {
    displayimg(imageno = n);
}

function displayimg(n) {
    var i;
    var image = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");

    if (n > image.length) {
        imageno = 1;
    }

    if (n < 1) {
        imageno = image.length;
    }

    for (i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    image[imageno - 1].style.display = "block";
    dots[imageno - 1].className += " active";
}

// Auto change images every 3 seconds
setInterval(function () {
    nextimg(1);
}, 3000); // Change 3000 to any number of milliseconds you want for the interval
