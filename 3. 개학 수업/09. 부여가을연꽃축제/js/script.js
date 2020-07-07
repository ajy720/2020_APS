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
	}

	setInterval(playSlide, 3000);

	$(".notice_gal .tab").click(function () {
		$(".notice_gal .tab").removeClass("on");
		$(this).addClass("on");

		$(".notice_gal .box").stop().fadeOut("fast");
		$(this).next(".box").stop().fadeIn("fast");
	});

	$(".family > div").click(function () {
		$(this).find("ul").stop().slideToggle();
		$(this).find("div").toggleClass("on");
		$(".family i").toggleClass("on");
	});

	function closeModal() {
		$(".modal").stop().fadeOut();
	}

	$(".pp button").click(closeModal);
	$(".modal .bg").click(closeModal);
	$(".notice li:first-child").click(function () {
		$(".modal").stop().fadeIn();
	});

	$(".gallery a").hover(
		function () {
			$(this).animate({ top: "10px", opacity: "0.5" }, 200);
		},
		function () {
			$(this).animate({ top: "0px", opacity: "1" }, 200);
		}
	);
});
