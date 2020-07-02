$(document).ready(function () {
	$(".main > li").hover(
		function () {
			$(this).find(".sub").stop().slideDown();
		},
		function () {
			$(this).find(".sub").stop().slideUp();
		}
	);

	var s = $(".slider a");
	var n = 0;

	function playSlide() {
		$(s[n++]).fadeOut("slow");

        if (n > 2) n = 0;
        
        $(s[n]).fadeIn("slow");
    };
    
    setInterval(playSlide,3000);

    $(".family div").click(function(){
        $(".family ul").stop().slideToggle()
        $(".family i").toggleClass("on")
    })


    function closeModal(){
        $(".modal").stop().fadeOut();
    }

    $(".modal button").click(closeModal)

    $(".modal .bg").click(closeModal)

    $(".notice li:first-child").click(function(){
        $(".modal").stop().fadeIn()
    })

    $(".notice_gal h3.tab").click(function(){
        $(".notice_gal h3.tab").removeClass("on")
        $(this).addClass("on")
        
        $(".notice_gal .box").removeClass("on")
        $(this).next(".box").addClass("on")

    })
});
