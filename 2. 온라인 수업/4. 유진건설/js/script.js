$(window).ready(function(){
    $("nav").hover(function(){
        $(".nav_bg").stop().slideDown()
        $(".sub").stop().slideDown()
    }, function(){
        $(".nav_bg").stop().slideUp()
        $(".sub").stop().slideUp()
    })

    var slide = $(".slider > a")
    var n = 0

    function playSlide(){
        $(slide[n]).css({
            "opacity": 0
        })
        n++
        if(n>2) n = 0;

        $(slide[n]).css({
            "opacity": 1
        })
    }

    setInterval(()=>{
        playSlide();
    }, 3000)

    $(".fam > div").click(function(){
        $(".fam > ul").slideToggle()
        $("i").toggleClass('on')
    })

    $(".content > .notice ul > li:first-child").click(function(){
        $(".pop").show()
    })

    $("button").click(function(){
        $(".pop").hide()
    })
})