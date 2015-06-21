$(function() {
	$('.nav-left > li').each( function () {
		var thisLi = $(this);
		var child = $(this).find('> ul');
		if (thisLi.has('ul')) {
			thisLi.find('> a').click( function () {
				if (thisLi.hasClass('open')) {
					child.stop(true, true).delay(100).hide({duration: 500, queue: true, easing: 'easeInOutExpo'});
					thisLi.removeClass('open');
				} else {
					child.stop(true, true).delay(100).show({duration: 500, queue: true, easing: 'easeInOutExpo'});
					thisLi.addClass('open');

				}
			});
		}
	});

// $('.ver-imagem').prettyPhoto();
// $('a[rel^="prettyPhoto"]').prettyPhoto();
});