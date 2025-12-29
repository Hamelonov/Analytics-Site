alert("Логическая ширина: " + window.screen.width + "px\n" + "Device Pixel Ratio (DPR): " + window.devicePixelRatio);
console.log('Test 123');
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

