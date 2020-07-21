$(document).ready(() => {
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
		$(s[n]).css({ "z-index": -1 });
		$(s[n++]).animate(
			{
				opacity: "0.5",
				left: "400px",
			},
			1500,
			function () {
				$(this).css({
					"z-index": 1,
					opacity: 0,
					left: "-800px",
				});
			}
		);

		if (n > 2) n = 0;
		$(s[n]).animate(
			{
				opacity: "1",
				left: "0",
			},
			1500
		);
	}

	setInterval(playSlide, 3000);

	$(".notice li:first-child").click(function () {
		$(".pp").stop().fadeIn();
	});
	$(".pp button").click(function () {
		$(".pp").stop().fadeOut();
	});
});
