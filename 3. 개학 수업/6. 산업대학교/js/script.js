$(document).ready(function () {
	$("nav").hover(
		function () {
			$(".nav_bg").stop().slideDown();
			$(".sub").stop().slideDown();
		},
		function () {
			$(".nav_bg").stop().slideUp();
			$(".sub").stop().slideUp();
		}
	);

	var s = $(".slider a");
	var n = 0;

	function playSlide() {
        $(s[n]).css({"z-index": "-1"})
		$(s[n++]).animate(
			{
				left: "600px",
				opacity: "0.5",
			},
			2000,
			function () {
				$(this).css({
					left: "-1200px",
					opacity: "0.5",
					"z-index": "1",
				});
			}
        );
        
		if (n > 2) n = 0;

		$(s[n]).animate(
			{
                left: "0",
                opacity: "1"
			},
			2000
		);
    }
    
    setInterval(() => {
        playSlide()
    }, 3000);

    $(".family div").click(function(){
        $(".family ul").stop().slideToggle()
        $(this).find("i").toggleClass("on")
    })

    $(".notice li:first-child").click(function(){
        $(".modal").show()
    })

    $(".popup button").click(closeModal)
    $(".modal .bg").click(closeModal)

    function closeModal(){
        $(".modal").hide()
    }
});
