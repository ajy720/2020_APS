$(document).ready(function () {
	$(".main > li").hover(
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
		$(s[n]).css({
			"z-index": -1,
		});
		$(s[n++]).animate(
			{
				left: "400px",
				opacity: 0.5,
			},
			1500,
			function () {
				$(this).css({
					"z-index": 1,
					left: "-800px",
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

	$(".notice_gal h3.tab").click(function () {
		$(".notice_gal h3.tab").removeClass("on");
		$(this).addClass("on");

		$(".notice_gal .box").stop().fadeOut();
		$(this).next(".box").stop().fadeIn();
	});

	$(".con > div").click(function () {
		$(this).next("ul").stop().slideToggle();
		$(this).find("i").stop().toggleClass("on");
	});

	$(".notice_gal li:first-child").click(function () {
		$(".modal").fadeIn("fast");
	});

	$(".pp button").click(closeModal);
	$(".modal .bg").click(closeModal);

	function closeModal() {
		$(".modal").fadeOut("fast");
	}
});
