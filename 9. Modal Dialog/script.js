$(document).ready(function() {
	$('#tombol').click(function() {
		$('#modal-box').slideDown(1000);
		$('#background').fadeIn(1000);
	})

	$('#close-button').click(function() {
		$('#modal-box').slideUp(1000);
		$('#background').fadeOut(1000);
	})
})