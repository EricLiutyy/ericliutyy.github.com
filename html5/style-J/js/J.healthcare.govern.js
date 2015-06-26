// JavaScript Document
$(document).ready(function(){
		var listTip = $('.id_get>li')
		$(listTip.next('div')).each(function(){
			if($(this).hasClass('ds-none')){
			}else{
				$(this).prev().find('a').removeClass('ui-icon-carat-r').addClass('ui-icon-carat-r-d');
			}
		});

		listTip.bind("click",function(){
			var soc = $(this).next('div')
			if(soc.css('display') == 'none'){
				soc.slideDown();
				$(this).find('a').removeClass('ui-icon-carat-r');
				$(this).find('a').addClass('ui-icon-carat-r-d');
			}else{
				soc.slideUp();
				$(this).find('a').removeClass('ui-icon-carat-r-d');
				$(this).find('a').addClass('ui-icon-carat-r');
			}
		});
		
		$('.J_icon_asterisk').bind("click",function(){
				if($(this).hasClass('J_icon_asterisk_a')){
					$(this).removeClass('J_icon_asterisk_a')
				}else{
					$(this).addClass('J_icon_asterisk_a')
				}
		});
});