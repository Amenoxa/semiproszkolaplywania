var doc = jQuery(document);



doc.ready(function(){
    "use strict";

    $(window).scrollTop(0);

    var typed = new Typed(".header__text", {
      strings: ['Nauka pływania dla <b>dzieci</b>', 'Nauka pływania dla <b>młodzieży</b>', 'Nauka pływania dla <b>dorosłych</b>', 'Nauka pływania dla <b>każdego..</b>'],
      typeSpeed: 30,
      backSpeed: 30,
      smartBackspace: true, // this is a default
      backDelay: 3000,
      loop: false,
      showCursor: false
      });

      




$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    lazyLoad: true,
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

$('.animation').each(function(){

    var waypoint = new Waypoint({
      element: this,
      handler: function(direction) {
        var cssvalue = $(this.element).attr('data-animation');

        $(this.element).addClass("animated "+cssvalue);
        $(this.element).css('opacity','1').fadeIn(3000);
      },
      offset: '75%'
    })

});

})

$(window).on("load", function(){
  $(".loader").fadeOut("slow");
});