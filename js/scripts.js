/*$(document).ready(function() {
	$menu = $('#menu').find('ul').find('li');

	$menu.hover(function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideDown();
	}, function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideUp();
	});
});*/

$(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 210,
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }
      });
    });
/*$(document).ready(function(){
    $("#mostrar").on( "click", function() {
      $('#target').show(3000); //muestro mediante id
      $('.target').show(); //muestro mediante clase
     });
    $("#ocultar").on( "click", function() {
      $('#target').hide(3000); //oculto mediante id
      $('.target').hide(); //muestro mediante clase
    });
  });*/

$(document).ready(function(){
   $("#m1").click(function(){
      $('#tabs-1').show(900);
      $('#tabs-2').hide(900);
      $('#tabs-3').hide(900);
   });
   $("#m2").click(function(){
      $('#tabs-2').show(900);
      $('#tabs-1').hide(900);
      $('#tabs-3').hide(900);
   });
   $("#m3").click(function(){
      $('#tabs-3').show(900);
      $('#tabs-2').hide(900);
      $('#tabs-1').hide(900);
   });
});