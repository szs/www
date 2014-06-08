// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();

$(function() {
    $('#fullpage').fullpage({});

	$('.responsive').slick({
		autoplay: true,
		autoplaySpeed: 60000,
		pauseOnHover: true,
		dots: true,
		infinite: true,
		speed: 900,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1,
			    infinite: true,
			    dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1
			  }
			}
		]
	});

	// Super nasty - please figure out why this is set in the first place.
	$('body').css('overflow-y','scroll');



});	
	