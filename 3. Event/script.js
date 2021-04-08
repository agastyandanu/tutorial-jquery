$(document).ready(function() {

	// event click (click)
	$('#klik').click(function() {
		alert('I am learning JQuery');
	});

	// double click (dblclick)
	$('#dblklik').dblclick(function() {
		$(this).css('background-color', 'lightblue');
	});

	// event mouse leave
	$('#mouse').mouseleave(function() {
		$(this).css('background-color', 'skyblue');
	});

	// event mouse enter
	$('#mouse').mouseenter(function() {
		$(this).css('background-color', 'lime');
	});

	// event keydown
	$('#keydown').keydown(function() {
		$('#pesan_keydown').text($(this).val());
	});

	// event keyup
	$('#keyup').keyup(function() {
		$('#pesan_keyup').text($(this).val());
	});


})