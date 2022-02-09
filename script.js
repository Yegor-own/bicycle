$(document).ready(function() {
	$('#burger').click(function() {
		$('#burger,.nav__body').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.twitter__tab:first-child').show();
  	$('.actions__item').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active_tab').siblings().removeClass('active_tab');
      var id = $(this).attr('href');
      $(id).fadeIn().siblings().fadeOut();
  	});
});