
let t1 = new TimelineMax({paused: true});
	
	t1.to(".one", 0.5, {
		y: 6,
		rotation: 45,
		ease: Expo.easeInOut,
		delay: -0.6
	});

	t1.to(".two", 0.5, {
		y: -2,
		rotation: -45,
		ease: Expo.easeInOut,
		delay: -0.6
	});

	t1.to(".menu", 1.2, {
		x: "100%",
		opacity: 1,
		ease: Expo.easeInOut,
		delay: -1
	});

	t1.reverse();
	
	$(document).on("click", ".toggle-btn", function() {
		t1.reversed(!t1.reversed());
	});

// parallax effect
$(document).ready(function() {

	let controller = new ScrollMagic.Controller();
	let ourScene = new ScrollMagic.Scene({
		triggerElement: '.cnn-page'
	})
	.setClassToggle('.cnn-page', 'fade-in')
	.addTo(controller);

	// row2
	let row2Scene = new ScrollMagic.Scene({
		triggerElement: '.row2'
	})
	.setClassToggle('.row2', 'fade')
	.addTo(controller);

	// landing
	let landingScene = new ScrollMagic.Scene({
		triggerElement: '.landing'
	})
	.setClassToggle('.landing', 'fade-landing')
	.addTo(controller);

	// row3
	let row3Scene = new ScrollMagic.Scene({
		triggerElement: '.row3'
	})
	.setClassToggle('.row3', 'fade-row3')
	.addTo(controller);

	// row4
	let row4Scene = new ScrollMagic.Scene({
		triggerElement: '.row4'
	})
	.setClassToggle('.row4', 'fade-row4')
	.addTo(controller);


	TweenMax.to(".bg1", 0.4, {
		opacity: 1,
		delay: 0.1,
		ease: Expo.easeInOut
	});

	TweenMax.to(".bg2", 0.6, {
		opacity: 1,
		delay: 0.2,
		ease: Expo.easeInOut
	});

	TweenMax.to(".bg3", 0.9, {
		opacity: 1,
		delay: 0.3,
		ease: Expo.easeInOut
	});

	TweenMax.to(".bg4", 1.3, {
		opacity: 1,
		delay: 0.4,
		ease: Expo.easeInOut
	});

	TweenMax.to(".bg5", 1.5, {
		opacity: 1,
		delay: 0.5,
		ease: Expo.easeInOut
	});

	TweenMax.to(".bg6", 1.7, {
		opacity: 1,
		delay: 0.6,
		ease: Expo.easeInOut
	});

	TweenMax.to(".bg7", 1.9, {
		opacity: 1,
		delay: 0.7,
		ease: Expo.easeInOut
	});

	TweenMax.to(".bg8", 2.1, {
		opacity: 1,
		delay: 0.8,
		ease: Expo.easeInOut
	});

	TweenMax.to(".bg9", 2.3, {
		opacity: 1,
		delay: 0.9,
		ease: Expo.easeInOut
	});

	TweenMax.to(".overlay-logo", 2.5, {
		opacity: 1,
		delay: 1.7,
		ease: Expo.easeInOut
	});

	// images end

	TweenMax.to(".overlay",2.5, {
		ease: Power2.easeI5Out
	});

	TweenMax.to(".overlay", 2.8, {
		delay: 3,
		opacity: 1,
		top: "-150%",
		ease: Expo.easeInOut
	});

	TweenMax.to(".overlay-2", 3.0, {
		delay: 3.1,
		opacity: 1,
		top: "-110%",
		ease: Expo.easeInOut
	});


	// $(window).scroll(function() {
	// 	let wScroll = $(this).scrollTop();
	// 	$("#award-img").css({
	// 		'transform' : 'translate(0px, '+ wScroll / -120 + '%)',
	// 	});
	// 	$("#pic1").css({
	// 		'transform' : 'translate(0px, '+ wScroll / -120 + '%)',
	// 	});
	// 	$("#pic2").css({
	// 		'transform' : 'translate(0px, '+ wScroll / -120 + '%)'
	// 	});
	// 	$("#pic3").css({
	// 		'transform' : 'translate(0px, '+ wScroll / -120 + '%)'
	// 	});
	// 	$("#pic4").css({
	// 		'transform' : 'translate(0px, '+ wScroll / -120 + '%)'
	// 	});

	// });
});


// $(function() {
// 	let documentEl = $(document),
// 		fadeElem1 = $('#award-img');
// 		fadeElem2 = $('#pic1');
// 		fadeElem3 = $('#pic2');
// 		fadeElem4 = $('#pic3');
// 		fadeElem5 = $('#pic4');

// 	documentEl.on('scroll', function() {
// 		let currScrollPos = documentEl.scrollTop();

// 		fadeElem1.each(function() {
// 			let $this = $(this),
// 				elemOffsetTop = $this.offset().top;

// 			if(currScrollPos > elemOffsetTop) $this.css('opacity', 1 -(currScrollPos-elemOffsetTop)/400);
// 		});

// 		fadeElem2.each(function() {
// 			let $this = $(this),
// 				elemOffsetTop = $this.offset().top;

// 			if(currScrollPos > elemOffsetTop) $this.css('opacity', 1 -(currScrollPos-elemOffsetTop)/400);
// 		});

// 		fadeElem3.each(function() {
// 			let $this = $(this),
// 				elemOffsetTop = $this.offset().top;

// 			if(currScrollPos > elemOffsetTop) $this.css('opacity', 1 -(currScrollPos-elemOffsetTop)/400);
// 		});

// 		fadeElem4.each(function() {
// 			let $this = $(this),
// 				elemOffsetTop = $this.offset().top;

// 			if(currScrollPos > elemOffsetTop) $this.css('opacity', 1 -(currScrollPos-elemOffsetTop)/400);
// 		});
		
// 	});
// });


