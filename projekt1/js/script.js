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
				}
			}
		],
		draggable:false,
	});

	$('.header-burger').click(function(event) {
		$('.header-burger,.header-menu,.header-menu-list,.header-menu-item').toggleClass('active');
	});

});