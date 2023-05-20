$(document).ready(function(){
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
		$('body').css({
			'background-position': '0 -' + posicion + 'px'
		});
	});
});


//Mover el fondo de arriba hacia abajo//
//$(document).ready(function(){
	//$(window).scroll(function(){
		//var barra = $(window).scrollTop();
		//var posicion = barra * 0.40;
		//$('body').css({
			//'background-position': '0 ' + posicion + 'px'
		//});
	//});
//});