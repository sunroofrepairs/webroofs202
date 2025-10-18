
const callNumber = document.getElementById("call-number");


const harmBugerIcon = document.getElementById("harmbuger-icon");
const closeIcon = document.getElementById("x-close");
const sideBar = document.getElementById("sidebar-wrap");
const mainContent = document.getElementById("main-content");


harmBugerIcon.addEventListener("click", () => {

    sideBar.style.display = "block";

    mainContent.style.display = "none";
});


closeIcon.addEventListener("click", () => {

    sideBar.style.display = "none";

    mainContent.style.display = "block";
});


callNumber.addEventListener("click", () => {

    window.location.href = "tel:0680529443"
});



const swiper = new Swiper('.slider-wrapper', {

    slidesPerView: 1,
    spaceBetween: 22,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,

    pagination: {

        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {

        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        0: {
            slidesPerView: 1
        },

        620: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 4
        }

    }
});