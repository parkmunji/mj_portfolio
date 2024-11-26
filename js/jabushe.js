const herder = document.querySelector("header");

document.addEventListener("scroll", () => {
   if (window.pageYOffset > 10) {
     herder.classList.add("fixed");
    } else {
     herder.classList.remove("fixed");
    }
 });

var burger = $('.menu-trigger');

burger.each(function(index){
  var $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-' + (index+7));
    $('.toggle_menu').slideToggle();
  })
});


const swiper = new Swiper('.swiper', {
   pagination: {
      clickable: true,
    },

   autoplay:{
      delay: 4000,
      loop: true,
   },

   scrollbar:{
		el : '.swiper-scrollbar',
      draggable: true, 
    },

   breakpoints:{
      400: {
         slidesPerView: 1,
      },
      700: {
         slidesPerView: 2,
         spaceBetween: 10,
      },
      1200 : {
         slidesPerView: 3,
         spaceBetween: 10,
      }
   }
});

const swiper2 = new Swiper('.review_slide', {
   pagination: {
      clickable: true,
    },

   autoplay: false,
   loop: true,
   loopedSlides: 1,

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   breakpoints:{
      700: {
         slidesPerView: 2,
         spaceBetween: 10,
      },
      1200 : {
         slidesPerView: 4,
         spaceBetween: 16,
      }
   }
});