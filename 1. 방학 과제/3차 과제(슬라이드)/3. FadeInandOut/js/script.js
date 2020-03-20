$(document).ready(function(){
    $("ul.gnb>li").hover(function(){
        $(this).find("ul.sub").stop().slideDown()
        console.log("Down")
    }, function(){
        $(this).find("ul.sub").stop().slideUp()
        console.log("UP")
    })

    var slide = $(".slider li")
    var n = 0

    function playSlide(){
        $(slide[n]).animate({
            opacity:"0"
        }, 1000)

        n++

        if(n>2) n = 0

        $(slide[n]).animate({opacity:"1"}, 1000)
    }

    playSlide()
    var timer = setInterval(() => {
        playSlide()
    }, 2000);

})