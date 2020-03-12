$(document).ready(function() {
	$('.slider').slick({
		slidesToShow:3,
		waitForAnimate:false,
		responsive:[
			{
				breakpoint:950,
				settings:{
					slidesToShow:2,
				}
			},
			{
				breakpoint:700,
				settings:{
					slidesToShow:1,
					arrows:false,
				}
			}
		],
		draggable:false,
	});

	$('.header-burger').click(function() {
		$('.header-burger,.header-menu,.header-menu-list,.header-menu-item').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header-menu-item').click(function() {
		$('.header-burger,.header-menu,.header-menu-list,.header-menu-item').removeClass('active');
		$('body').removeClass('lock');
	});

});