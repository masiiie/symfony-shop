//import '../styles/easyCarousel.css'

/*
var parentBoxWidth = $('.other-box').parent('div').width()
$('.other-box').css('width', parentBoxWidth - 20)
$('.other-box').css('height', parentBoxWidth - 20)

var otherBoxWidth = $('.other-box').width()
$('.carousel').css('width', otherBoxWidth + 60)
*/


$('.carousel-item .box').click(function(){
    var thisColor = $(this).css("background-color");
    $('.other-box').css("background-color", thisColor);
})

/*
$('.carousel-item li').css('margin-top', 10)
$('.carousel-item li').css('margin-bottom', 10)
$('.carousel-item ul li:nth-child(2)').css('margin', 10)
*/

/*
var carouselWidth = $('.carousel').width()
var dimension = (carouselWidth - 100)/3 
$('.carousel-item .box').css('width', dimension)
$('.carousel-item .box').css('height', dimension/2)
*/

/*
$('.box').each(function(index, element){
    var mywidth = $(this).width()
    var value = (carouselWidth - mywidth)/2
    $(this).css({left: value})
})
*/


$('.carousel-indicators li:nth-child(1)').addClass('active')
$('.carousel-inner .carousel-item:nth-child(1)').addClass('active')