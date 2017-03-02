// слайдер меню навигации

// $(".nav li").hover(function () {
// 	$(this).children("ul").stop().delay(0).animate({height: "toggle", opacity: "toggle"}, 100);
// });


// $(".nav li").hover(function () {
// 	if(window.matchMedia('(min-width: 992px)').matches)
// 	{
// 		$(this).children("ul").stop().delay(0).animate({height: "toggle", opacity: "toggle"}, 100);
// 	};
// });

$(".nav li").hover(function () {
	if(window.matchMedia('(min-width: 992px)').matches)
	{
		$(this).children("ul").stop().delay(0).animate({height: "toggle", opacity: "toggle"}, 700,  'easeOutElastic', function () {});
	};
});