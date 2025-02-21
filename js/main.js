

if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('#partner')) {

    var swiper1 = new Swiper(".mySwiper", {
        // slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
    });

}

document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.getElementById("navbar");
    let stepsSection = document.getElementById("steps");

    // Add shadow effect when scrolling
    window.addEventListener("scroll", function () {
        if (window.scrollY > (stepsSection.offsetTop - 100)) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
