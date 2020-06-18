$(document).ready(function () {
	$(".main > li").hover(
		function () {
			$(this).find(".sub").stop().slideDown();
		},
		function () {
			$(this).find(".sub").stop().slideUp();
		}
	);

	var s = $(".slider > a");
	var n = 0;

	function playSlide() {
		$(s[n++]).animate({ top: "300px" }, 1500, function () {
			$(this).css({ top: "-300px" });
		});
		if (n > 2) n = 0;
		$(s[n]).animate({ top: "0" }, 1500);
    }
    
    setInterval(() => {
        playSlide()
    }, 3000);

    $(".notice_gal .tab").click(function(){
        $(".notice_gal .tab").removeClass("on")
        $(this).addClass("on")
        $(".notice_gal .box").removeClass("on")
        $(this).next(".box").addClass("on")
    })

    $(".notice_gal li:first-child").click(function(){
        $(".modal").show()
    })

    $(".modal input").click(function(){
        $(".modal").hide()
    })

    $(".modal .bg").click(function(){
        $(".modal").hide()
    })
});
