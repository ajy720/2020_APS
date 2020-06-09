$(document).ready(function () {
	$("nav").hover(
		function () {
			$(".sub").stop().slideDown();
			$(".nav_bg").stop().slideDown();
		},
		function () {
			$(".sub").stop().slideUp();
			$(".nav_bg").stop().slideUp();
		}
	);

	var s = $(".slider > a");
	var n = 0;

	function playSlide() {
		$(s[n++]).animate({ left: "1200px" }, 1500, function () {
			$(this).css({ left: "-1200px" });
		});

		if (n > 2) n = 0;
		$(s[n]).animate({ left: "0px" }, 1500);
    }
    
    setInterval(() => {
        playSlide()
    }, 3000);

    $(".family > div").click(function(){
        $("i").toggleClass("on");
        $('.family ul').stop().slideToggle();
    })

    $(".content ul > li:first-child").click(function(){
        $(".modal").show()
    })

    $(".modal button").click(closeModal)
    $(".modal .bg").click(closeModal)

    function closeModal(){
        $(".modal").hide()
    }
});
