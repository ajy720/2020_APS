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

	var n = 0;
	var s = $(".slider a");

	function playSlide() {
		$(s[n]).css({ "z-index": "-1" });
		$(s[n++]).animate({ left: "600px", opacity: "0.5" }, 1500, function () {
			$(this).css({ left: "-1200px", opacity: "0", "z-index": "1" });
		});

		if (n > 2) n = 0;

		$(s[n]).animate({ left: "0", opacity: "1" }, 1500);
	}

	setInterval(playSlide, 3000);
  

	$(".family > div").click(function () {
		$(".family i").toggleClass("on");
    $(".family ul").stop().slideToggle();  
  });

	$(".notice li:first-child").click(function () {
		$(".modal").fadeIn("fast");
	});

	function closeModal() {
		$(".modal").fadeOut("fast");
	}

	$(".modal .bg").click(closeModal);
	$(".modal button").click(closeModal);
});
