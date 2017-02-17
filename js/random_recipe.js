$("#random_recipe").click(function() {
	var list_recipes = ["wine_strawberry.html", "https://www.google.com.ua", "https://www.ukr.net"];
	var i = Math.round(Math.random()*2);
	document.location = $("#random_recipe").attr("href", list_recipes[i]);
});


    // alert(i);
    // window.location = list_recipes[i];