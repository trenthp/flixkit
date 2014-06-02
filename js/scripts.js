$(document).foundation();

$(document).ready(function(){

	$('.center-slick').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});


	// Grid View
	$('#grid-view').on('click', function(){

		event.preventDefault();
		$('.gallery div').removeClass('large-6').addClass('large-3');
		$('.gallery p').hide();

	});

	// List View
	$('#list-view').on('click', function(){

		event.preventDefault();
		$('.gallery div').removeClass('large-3').addClass('large-6');
		$('p').show();

	});

});