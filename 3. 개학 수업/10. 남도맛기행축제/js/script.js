$(document).ready(function () {
	$("nav > li").hover(
		function () {
			$(this).find(".sub").stop().slideDown();
		},
		function () {
			$(this).find(".sub").stop().slideUp("fast");
		}
	);

	var n = 0;
	var s = $(".slider a");
	function playSlide() {
		$(s[n]).css({ "z-index": 0 });
		$(s[n++]).animate(
			{
				left: "400px",
				opacity: 0.5,
			},
			1500,
			function () {
				$(this).css({
					left: "-800px",
					opacity: 0,
					"z-index": 1,
				});
			}
		);

		if (n > 2) n = 0;

		$(s[n]).animate(
			{
				left: "0",
				opacity: 1,
			},
			1500
		);
	}

	setInterval(playSlide, 3000);

	$(".notice li:first-child").click(function () {
		$(".pp").fadeIn();
	});

	$(".pp button").click(function () {
		$(".pp").fadeOut();
	});

	// var pointer = document.getElementById("pointer");

	// document.addEventListener("mousemove", (e) => {
	// 	pointer.setAttribute("style", `top: ${e.pageY}px;left: ${e.pageX}px`);
	// });
});
