$(document).ready(function(){

	// all elements
	$('*').css('background-color', 'lightgrey');

	// selector tag
	$('h1').css('color', 'red');
	$('p').css('color', 'blue');

	// selector class
	$('.judul').css('background-color', 'blue');
	$('.paragraf').css('color', 'salmon');

	// selector id
	$('#judul').css('border', '2px solid blue');
	$('#paragraf').css('border', '2px solid green');
	
	// eq(index)
	$('h4:eq(2)').css('background-color', 'yellow')
	$('h4:first').css('background-color', 'lightgreen')
	$('h4:last').css('background-color', 'lightblue')

	// input:type
	$('input').css('color', 'blue').css('border-radius', '7px').css('font-family', 'calibri'); //multiple properties
	$('input:submit').css('background-color', 'lightblue');
	$('input:button').css('padding', '10px');

})