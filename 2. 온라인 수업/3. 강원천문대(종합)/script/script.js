$(document).ready(function () {
  $(".navbar > li").hover(
    function () {
      $(this).find("ul.sub").stop().slideDown();
    },
    function () {
      $(this).find("ul.sub").stop().slideUp();
    }
  );

  var slide = $(".slider > a");
  var n = 0;
  function playSlide() {
    $(slide[n]).css({
      opacity: 0,
    });
    n++;
    if (n > 2) n = 0;
    $(slide[n]).css({
      opacity: 1,
    });
  }

  setInterval(() => {
    playSlide();
  }, 3000);

  $(".notice_gal h3").click(function () {
    $(".notice_gal h3").removeClass("on");
    $(".notice_gal .box").removeClass("on");

    $(this).addClass("on");
    $(this).next(".box").addClass("on");
  });

  $(".notice_gal > .box > ul > li:first-child").click(function () {
    $(".popup").show();
  });

  $("button").click(function () {
    $(".popup").hide();
  });
});
