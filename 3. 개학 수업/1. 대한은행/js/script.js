$(document).ready(function(){
    $("nav").hover(function(){
        $(".sub").stop().slideDown()
    }, function(){
        $(".sub").stop().slideUp()
    })

    var s = $(".slider img")
    var n = 0

    function playSlide(){
        $(s[n++]).animate({
            "left": "1200px"
        }, 1000, function(){
            $(this).css("left","-1200px")
        })
        
        if(n>2) n = 0

        $(s[n]).animate({
            "left": "0px"
        }, 1000)

    }

    setInterval(() => {
        playSlide()
    }, 3000);

    $(".notice_gal > .tab").click(function(){
        $(".notice_gal > .tab").removeClass("on");
        $(".notice_gal > .box").removeClass("on");
        $(this).addClass("on");
        $(this).next(".box").addClass("on");
    })
})