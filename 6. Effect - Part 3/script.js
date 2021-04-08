$(document).ready(function() {

	$('#kotak').css('background-color', 'lime').css('height', '100px').css('width', '100px');
	$('#box1').css('background-color', 'blue').css('height', '50px').css('width', '50px');
	$('#box2').css('background-color', 'red').css('height', '50px').css('width', '50px');
	$('#box3').css('background-color', 'green').css('height', '50px').css('width', '50px');
	$('#box4').css('background-color', 'brown').css('height', '70px').css('width', '70px');
	$('#animate-box').css('background-color', 'grey').css('height', '100px').css('width', '100px').css('position', 'absolute');

	// hide effect hide(speed)
	$('#hide').click(function() {
		$('#kotak').hide(1000);
	});

	// show effect show(speed)
	$('#show').click(function() {
		$('#kotak').show('slow');
	});

	// fadeOut effect
	$('#fadeout').click(function() {
		$('#box1').fadeOut();
		$('#box2').fadeOut(1000);
		$('#box3').fadeOut(2000);
	});

	// fadeIn effect
	$('#fadein').click(function() {
		$('#box1').fadeIn();
		$('#box2').fadeIn(1000);
		$('#box3').fadeIn(2000);
	});

	// fadeToggle effect
	$('#fadetoggle').click(function() {		
		$('#box1').fadeToggle();
		$('#box2').fadeToggle(1000);
		$('#box3').fadeToggle(2000);
	});

	// fadeTo effect - fadeTo('speed', 'opacity 0-1')
	$('#fadeto').click(function() {		
		$('#box1').fadeTo('slow', 0.1);
		$('#box2').fadeTo(1000, 0.4);
		$('#box3').fadeTo(2000, 0.7);
	});

	// slideUp effect
	$('#slideup').click(function() {
		$('#box4').slideUp('slow');
	});

	// slideDown effect
	$('#slidedown').click(function() {
		$('#box4').slideDown('slow');
	});

	// slideDown effect
	$('#slideup').click(function() {
		$('#box4').slideUp('fast');
	});

	// slideToggle effect
	$('#slidetoggle').click(function() {
		$('#box4').slideToggle(2000);
	});

	// animate effect
	$('#kiri').click(function() {
		$('#animate-box').animate({'left': '-=100px'}, 'slow');
	});

	$('#kanan').click(function() {
		$('#animate-box').animate({'right' : '-=70px'}, 2000);
	});

	// clearQueue effect
	$('#start').click(function() {
		$('#clearqueue-box').animate({'left': '+=500'}, 5000);
		$('#clearqueue-box').queue(function() {})
	})

	$('#stop').click(function() {
		$('#clearqueue-box').clearQueue();
		$('#clearqueue-box').stop();
	})

	$('#delay').click(function() {
		$('#delay-box1').slideUp(2000).delay(2000).fadeIn(2000);
		$('#delay-box2').slideUp(2000).fadeIn(2000);
	})


})