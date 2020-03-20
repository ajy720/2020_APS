$(document).ready(()=>{
    $("ul.gnb>li").hover(()=>{
        $("ul.sub").stop().slideDown()
    }, ()=>[
        $("ul.sub").stop().slideUp()
    ])

    var slide = $(".slider li");
    var n = 0;

    function playSlide(){
        $(slide[n]).animate({
            top:"300px"
        }, 1000, function(){
            $(this).css({top:"-300px"});
        })

        n++;

        if(n > 2) n = 0

        $(slide[n]).animate({top:"0px"}, 1000);
    }

    var timer = setInterval(() => {
        playSlide()
    }, 2000);
})


/*
var slide = $("ul.slider li");
var sno = 0;

function playSlide(){
    $(slide[sno]).animate({
        top:"300px"
    }, 1000, function(){
        $(this).css({top:"-300px"});
    });

    sno++;

    if(sno>2) sno = 0;

    $(slide[sno]).animate({
        top:"0px"
    }, 1000);
}

var timer = setInterval(function(){
    playSlide();
    console.log("Slide")
}, 2000);*/