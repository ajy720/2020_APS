$(document).ready(function () {
  $(".navbar").hover(
    function () {
      $(".sub").stop().slideDown();
    },
    function () {
      $(".sub").stop().slideUp();
    }
  );

  var slide = $(".slider > a");
  var n = 0;

  function playSlide() {
    $(slide[n++]).animate(
      {
        left: "1200px",
      },
      1000,
      function () {
        $(this).css({
          left: "-1200px",
        });
      }
    );

    if (n > 2) n = 0;

    $(slide[n]).animate(
      {
        left: "0",
      },
      1000
    );
  }

  setInterval(() => {
    playSlide();
  }, 2000);

  $(".notice_gal h3").click(function () {
    $(".notice_gal h3").removeClass("on");
    $(this).addClass("on");

    $(".notice_gal .box").removeClass("on");
    $(this).next(".box").addClass("on");
  });

  $(".notice > ul > li").click(function () {
    $(".popup").show();
  });

  $("#close").click(function () {
    $(".popup").hide();
  });
});
