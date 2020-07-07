$(document).ready(function () {
	$(".main > li").hover(
		function () {
			$(this).find(".sub").stop().slideDown();
		},
		function () {
			$(this).find(".sub").stop().slideUp();
		}
	);

	var s = $(".slide a");
	var n = 0;

	function playSilde() {
        $(s[n]).css({ "z-index": -1});
		$(s[n++]).animate({ top: "150px", opacity: "0.5"}, 1500, function () {
			$(this).css({ top: "-150px", opacity: "0", "z-index": 1});
		});

		if (n > 2) n = 0;

		$(s[n]).animate({ top: "0px", opacity: "1" }, 1500);
	}

	setInterval(playSilde, 3000);

	$(".notice_gal h3.tab").click(function () {
		$(".notice_gal h3.tab").removeClass("on");
		$(this).addClass("on");

		$(this).next(".box").siblings(".box").fadeOut(200);
		$(this).next(".box").fadeIn(200);
	});

	function closeModal() {
		$(".modal").fadeOut(200);
	}

	$(".modal button").click(closeModal);

	$(".modal .bg").click(closeModal);

	$(".notice_gal li:first-child").click(function () {
		$(".modal").fadeIn(200);
	});

	$(".gal_box a").hover(
		function () {
			$(this).stop().animate({ top: "10px", opacity: "0.7" }, 200);
		},
		function () {
			$(this).stop().animate({ top: "0px", opacity: "1" }, 200);
		}
	);
});
