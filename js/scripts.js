$(document).foundation();

$(document).ready(function(){


	//RANDOM QUOTE
	var limit = 6;
	var numRand = Math.floor(Math.random()*limit);

	var msg0 = '&#8220;Everything I learned I learned from the movies.&#8221;' + '<br>' + '&#45; Audrey Hepburn';
	var msg1 = '&#8220;People who LIKE movies have a favorite. People who LOVE movies couldn&#39;t possibly choose.&#8221;' + '<br>' + '&#45; Nicole Yatsonsky';
	var msg2 = '&#8220;You know what your problem is, it&#39;s that you haven&#39;t seen enough movies - all of life&#39;s riddles are answered in the movies.&#8221;' + '<br>' + '&#45; Steve Martin';
	var msg3 = '&#8220;Every great film should seem new every time you see it.&#8221;' + '<br>' + '&#45; Roger Ebert';
	var msg4 = '&#8220;Audience can live without a movie but a movie cannot live without an audience.&#8221;' + '<br>' + '&#45; Amit Kalantri';
	var msg5 = '&#8220;The moment we cry in a film is not when things are sad but when they turn out to be more beautiful than we expected them to be.&#8221;' + '<br>' + '&#45; Alain de Botton';

	var randomMsg = eval('msg' + numRand);

	$('.quote').html(randomMsg);

	console.log(randomMsg);


	//SLICK
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


	$('.gallery p').hide();

	//GRID VIEW
	$('#grid-view').on('click', function(){

		event.preventDefault();
		$('.gallery div').removeClass('large-6').addClass('large-3');
		$('.gallery p').hide();

	});

	//LIST VIEW
	$('#list-view').on('click', function(){

		event.preventDefault();
		$('.gallery div').removeClass('large-3').addClass('large-6');
		$('p').show();

	});

});