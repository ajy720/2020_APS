$(document).ready(function () {
	$(".main > li").hover(
		function () {
			$(this).find(".sub").stop().slideDown();
		},
		function () {
			$(this).find(".sub").stop().slideUp("fast");
		}
	);

	var s = $(".slider a");
	var n = 0;

	function playSlide() {
		$(s[n++]).animate(
			{
				left: "800px",
			},
			1500,
			function () {
				$(this).css({ left: "-800px" });
			}
		);

		if (n > 2) n = 0;

		$(s[n]).animate(
			{
				left: 0,
			},
			1500
		);
	}

	setInterval(playSlide, 3000);
	
	$(".family > div > div").click(function(){
		$(this).next("ul").stop().slideToggle()
		$(this).find("i").toggleClass("on")
	})

	$(".notice li:first-child").click(function(){
		$(".modal").stop().fadeIn();
	})

	$(".pp button").click(function(){
		$(".modal").stop().fadeOut();
	})
});
