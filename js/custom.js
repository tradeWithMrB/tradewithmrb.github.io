// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

document.addEventListener('DOMContentLoaded', function() {
    var openPopupBtns = document.getElementsByClassName('openPopupBtn');
    var closePopupBtn = document.getElementById('closePopupBtn');
    var popup = document.getElementById('popup');

    for (var i = 0; i < openPopupBtns.length; i++) {
        openPopupBtns[i].addEventListener('click', function() {
            popup.style.display = 'flex';
        });
    }

    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var openPopupBtns = document.getElementsByClassName('open2PopupBtn');
    var closePopupBtn = document.getElementById('closePopupBtn2');
    var popup = document.getElementById('popup2');

    for (var i = 0; i < openPopupBtns.length; i++) {
        openPopupBtns[i].addEventListener('click', function() {
            popup.style.display = 'flex';
        });
    }

    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

// movet to top button js

// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.onclick = function() {
    topFunction();
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
