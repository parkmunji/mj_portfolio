$(document).ready(function(){

   //type
   var typed = new Typed('.code', {
      strings: ["&#123; Hello, I'm &#125;", "&#123; WEBDESIGNER&#183;CODER &#125;"],
      typeSpeed: 80,
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