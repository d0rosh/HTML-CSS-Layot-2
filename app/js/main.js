(function(){

	// scroll to section
	function ascrollto(id) {
		let etop = $('#' + id).offset().top - $('.top-block').height() - 50;
		$('html, body').animate({
		  scrollTop: etop
		}, 1000);
	}

	$('nav ul li').click(function(evt){
		evt.preventDefault();
		let width = $(window).width();
		let targetClass = evt.currentTarget.className;
		if (targetClass) {
			ascrollto(targetClass);
			$('nav ul li a').each(function(i){
				$(this).removeClass('active');
			});
			$(this).find('a').addClass('active');
		}

		if (width < 768 && targetClass) {
			$('nav').fadeToggle("fast").removeClass('animated fadeInDown')
		}

		
	});

	// fixing the menu to the top edge
	let offsetTopNav = $('.nav-block').offset().top;
	$(window).scroll(function(){
		if ($(document).scrollTop() >= offsetTopNav) {
			$('.nav-block').addClass('fixed-menu');
		}else {
			$('.nav-block').removeClass('fixed-menu');
		}
	})

	// check for availability cookie
	if ($.cookie('distibutor_key')) {
		$('.change-distributor').css({'display':'none'});
		$('.location-d').html($.cookie('distibutor_key'))
	}else {
		$('.change-distributor').css({'display':'block'});
	}

	function renameDistrib(){
		let value = $('.location-value').val();
		if (value != '') {
			$('.change-distributor').css({'display':'none'});
			$.cookie('distibutor_key', value);
			$('.location-d').html(value);
			$('.invalid-value').html('');
		}else {
			$('.invalid-value').html('You need to fill in the field');
		}
		
	}

	$('.rename-btn').click(function(){
		renameDistrib()
	});

	$('.change-link').click(function(evt){
		evt.preventDefault();
		$('.change-distributor').css({'display':'block'})
	});
	$('.change-btn').click(function(){
		$('.change-distributor').css({'display':'block'})
	});

	// loader in site script
	$(window).on('load', function(){
		$('.loader').css({'display':'none'});
	});

	// script for WOOW plugin
	new WOW().init();

	// add arrow in item has submenu
	$.each($('nav ul li ul'), function(i, el){
		$(el).prev().addClass('submenu');
	});

	$('.submenu').click(function(evt){
		evt.preventDefault();
		$(this).parent().find('ul').slideToggle('fast');
	});

	function onResize(){
		let height = $(window).height();
		let width = $(window).width();
		if (width < 768) {
			$('nav').css({'height': height + 'px'})
		}else {
			$('nav').css({'height':'100%'})
		}
	}
	onResize();

	$(window).resize(function(){
		onResize();
	})


	// menu in small screen
	let flugMenu = true
	$('.nav-btn').click(function(){
		if (flugMenu) {
			$('nav').fadeToggle('slow').addClass('animated fadeInDown')
			flugMenu = false;
		}else {
			$('nav').fadeToggle("fast").removeClass('animated fadeInDown')
			flugMenu = true;
		}
	});

	// big-slider script options
	$('#big-slider').owlCarousel({
    loop:true,
	    nav:false,
	    items: 1,
	    dots: true,
	    autoplay: true,
	    autoplayTimeout: 7000
	})

	// small-slider script options
	$('#small-slider').owlCarousel({
    loop:true,
	    nav:false,
	    items: 1,
	    dots: true,
	    autoplay: true,
	    autoplayTimeout: 7000
	})

	// tabs script options
	$('.tabs').tabslet({
		active: 1
	});
}());