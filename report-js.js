$( document ).ready(function() {
	setTimeout(function(){
		$( ".button" ).click(function() {
  			window.print();
		});
	}, 4000);
});

$('.header').click(function(){
     $(this).toggleClass('expand').nextUntil('tr.header').slideToggle(100);
});
