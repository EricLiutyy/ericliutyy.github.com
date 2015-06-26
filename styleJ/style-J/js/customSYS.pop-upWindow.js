// JavaScript Document
$(document).ready(function() {
	var m = "<div data-role='popup' data-overlay-theme='b' data-corners='false' id='popupDial'><div class='tText'></div><div class='btnText'><a href='#' class='ui-shadow' data-rel='back'></a></div></div>"
	$('.ui-page').append(m);
	$('#popupDial').popup();
	
//	var t = '信息输入有误，请重新输入！';//设置提示是文字
//	var b = '知道了';//设置按钮文字

	var t = '已为您取消该订阅！';//设置提示是文字
	var b = '知道了';//设置按钮文字
	
	$(function (){
		$('.tText').append(t);
		$('.btnText a').append(b);
	});
})(jQuery);

//自定义提示窗 Custom prompt window