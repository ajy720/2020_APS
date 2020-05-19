$(document).ready(function(){
    $("nav").hover(function(){
        $(".sub").stop().slideDown()
    }, function(){
        $(".sub").stop().slideUp()
    })

    var slide = $(".slide > a")
    var n = 0

    function playSlide(){
        $(slide[n++]).animate({
            left: "1200px"
        }, 1500, function(){
            $(this).css({
                left: "-1200px"
            })
        })

        if(n > 2) n = 0
        
        $(slide[n]).animate({
            left: "0px"
        }, 1500)
    }

    setInterval(()=>{
        playSlide();
    }, 3000)

    $(".tab").click(function(){
        $(this).addClass("on")
        $(this).siblings("h3").removeClass("on")

        
        $(this).siblings(".box").removeClass("on")
        $(this).next(".box").addClass("on")
    })

    $(".notice > ul > li:first-child").click(function(){
        $(".popup").show()
    })

    $(".close").click(function(){
        $(".popup").hide()
    })
})