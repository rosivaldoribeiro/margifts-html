var wish = $(".wish-list > span > i");
var divWish = $(".wish-list");
var wishFill = $(".wish-list-fill > span > i");
var divWishFill = $(".wish-list-fill");


wish.click(function(){
    divWish.css("display","none");
    divWishFill.css("display","inline");
    wishFill.addClass("animate__animated animate__heartBeat")
})

wishFill.click(function(){
    divWishFill.css("display","none");
    divWish.css("display","inline");
})