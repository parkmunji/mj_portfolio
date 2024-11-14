const swiper = new Swiper('.swiper', {

   slidesPerView: 1,
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



var burger = $('.menu-trigger');

burger.each(function(index){
  var $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-' + (index+7));
    $('.toggle_menu').slideToggle();
  })
});