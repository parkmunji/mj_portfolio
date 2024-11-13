const swiper = new Swiper('.swiper', {

   slidesPerView: 4,
   spaceBetween: 30,
   loop: true,
   pagination: {
      // el: ".swiper-pagination",
      clickable: true,
    },
 
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
});

const herder = document.querySelector("header");

document.addEventListener("scroll", () => {
   if (window.pageYOffset > 10) {
     herder.classList.add("fixed");
    } else {
     herder.classList.remove("fixed");
    }
 });