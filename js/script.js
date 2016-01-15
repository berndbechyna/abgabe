
/*$(document).ready(function(){
	$('.block.block-secondary').animate({
		opacity:0.8
	});
	$('.block.block-secondary').hover(function(){
		$(this).stop().animate({opacity:1});
	}, function(){
		$(this).stop().animate({opacity:0.8});
	});
});*/

/*about-page*/
$(document).ready(function(){
	$('.block.block-secondary').hover(function(){
		$(this).css({"background-color":"#e74c3c","color":"#ecf0f1"});
	}, function(){
		$(this).css({"background-color":"#ecf0f1", "color":"#666666"});
	});

});