$(function() {
	// navegacao lateral
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

	//  btn-destaque
	$('.btn-destaque').click( function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active btn-warning');
			$(this).addClass('btn-default');
			$(this).find('.fa').addClass('fa-star-o');
			$(this).find('.fa').removeClass('fa-star');
		} else {
			$(this).find('.fa').removeClass('fa-star-o');
			$(this).find('.fa').addClass('fa-star');
			$(this).addClass('active btn-warning');
			$(this).removeClass('btn-default');
		}
	})
	//  btn-ativo
	$('.btn-ativo').click( function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active btn-success');
			$(this).addClass('btn-default');
			$(this).find('.fa').addClass('fa-eye-slash');
			$(this).find('.fa').removeClass('fa-eye');
			$(this).find('.sr-only').html('Ativar');
		} else {
			$(this).find('.fa').removeClass('fa-eye-slash');
			$(this).find('.fa').addClass('fa-eye');
			$(this).addClass('active btn-success');
			$(this).removeClass('btn-default');
			$(this).find('.sr-only').html('Desativar');
		}
	})

// $('.ver-imagem').prettyPhoto();
// $('a[rel^="prettyPhoto"]').prettyPhoto();
});