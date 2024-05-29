
(function ($) {

	"use strict";




		


  
  
	//Main Slider Carousel
	if ($('.updates-in').length) {
		$('.updates-in').owlCarousel({
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="previous flaticon-next-5"></span>', '<span class="flaticon-next-5"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	

	var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


$(function() {
    var body = $(".body-wapper");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            body.removeClass('body-wapper').addClass("warp-alt");
        } else {
            body.removeClass("warp-alt").addClass('body-wapper');
        }
    });
});

	
})(window.jQuery);

