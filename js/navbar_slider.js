// слайдер меню навигации

$(".nav li").hover(function () {
	$(this).children("ul").stop().delay(0).animate({height: "toggle", opacity: "toggle"}, 100);
});