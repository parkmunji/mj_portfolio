const swiper = new Swiper('.swiper', {
   pagination: {
      // el: ".swiper-pagination",
      clickable: true,
    },

   autoplay:{
      delay: 4000, // 시간 설정
      loop: true,
   },
 
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

   breakpoints:{
      700: {
         slidesPerView: 1,
      },
      1000: {
         slidesPerView: 2,
         spaceBetween: 30,
      },
      1299 : {
         slidesPerView: 4,
         spaceBetween: 30,
      }
   }
});

const herder = document.querySelector("header");

document.addEventListener("scroll", () => {
   if (window.pageYOffset > 10) {
     herder.classList.add("fixed");
    } else {
     herder.classList.remove("fixed");
    }
 });