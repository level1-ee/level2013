$(document).ready(function(){
	// Target your .container, .wrapper, .post, etc.
	$(".event-video").fitVids();


// var controller = $.superscrollorama();
// 			// individual element tween examples
// 			controller.addTween('.intro-heading', TweenMax.to($('.loading'),.5,{
//     css:{opacity:0}}),
//     0, // scroll duration of tween (0 means autoplay)
//     10); // offset the start of the tween by 200 pixels

// // individual element tween examples
// 			controller.addTween('.intro-heading', TweenMax.from($('.fadein'),.5,{
//     css:{opacity:0}}),
//     0, // scroll duration of tween (0 means autoplay)
//     10); // offset the start of the tween by 200 pixels




// 			// individual element tween examples
// 			controller.addTween('.events-videos__logo', TweenMax.to($('.events-videos__logo'),.5,{
//     css:{opacity:1}}),
//     0, // scroll duration of tween (0 means autoplay)
//     -200); // offset the start of the tween by 200 pixels




var $window = $(window); //You forgot this line in the above example

	$('.header-bg').each(function(){
	var $bgobj = $(this); // assigning the object

	$(window).scroll(function() {
		var yPos = -($window.scrollTop() / $bgobj.data('speed'));
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';
		// Move the background
		$bgobj.css({ backgroundPosition: coords });
	});
});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 80) {
				$('.loading, .slider').fadeOut();
		} else {
				$('.loading, .slider').fadeIn();
		}
	});

	$('.intro-heading').hide();
	$(window).scroll(function(){
		if ($(this).scrollTop() > 110) {
				$('.intro-heading').fadeIn();
		} else {
				$('.intro-heading').fadeOut();
		}
	});


var target = $('.header-bg');
var targetHeight = target.outerHeight();

$(document).scroll(function(e){
		var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
		if(scrollPercent >= 0){
				target.css('opacity', scrollPercent);
		}
});


// var $container = $('.block-grid');
// // initialize
// $container.masonry({
//   itemSelector: 'li'
// });

// var $container2 = $('.sponsor-grid');
// // initialize
// $container2.masonry({
//   itemSelector: 'li'
// });

$(".tabs-container").easytabs({
	animate: true,
	animationSpeed: 300,
	updateHash: false
	// collapsible: true
});

$('.scrollable').scrollbar({
	"type": "simple",
	"ignoreMobile": false
});

});