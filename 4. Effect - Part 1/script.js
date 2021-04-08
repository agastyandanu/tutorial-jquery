$(document).ready(function() {

	$('#kotak').css('background-color', 'lime').css('height', '150px').css('width', '150px');
	$('#box1').css('background-color', 'blue').css('height', '100px').css('width', '100px');
	$('#box2').css('background-color', 'red').css('height', '100px').css('width', '100px');
	$('#box3').css('background-color', 'green').css('height', '100px').css('width', '100px');

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


})