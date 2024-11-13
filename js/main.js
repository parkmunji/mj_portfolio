$(document).ready(function(){

   //type
   var typed = new Typed('.code', {
      strings: ["&#123; Webdesign&#183;Coding &#125;", "&#123; Portfolio &#125;"],
      typeSpeed: 70,
      smartBackspace: true,
      backSpeed: 50,
    });

    //aos
    AOS.init({
      duration: 1000,
    });
    

    //scroll event
   //  $(window).on('scroll', function(){
   //    $(window).scrollTop();
   //       $("#scroll_fd").addClass("show");
   //  })
})