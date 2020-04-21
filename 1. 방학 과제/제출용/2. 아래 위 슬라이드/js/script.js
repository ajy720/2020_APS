$(document).ready(() => {
  $("ul.gnb>li").hover(
    function () {
      $("ul.sub").stop().slideDown();
    },
    function () {
      $("ul.sub").stop().slideUp();
    }
  );

  var slide = $(".slider li");
  var n = 0;

  function playSlide() {
    $(slide[n]).animate(
      {
        top: "-300px",
      },
      1000,
      function () {
        $(this).css({ top: "300px" });
      }
    );

    n++;

    if (n > 2) n = 0;

    $(slide[n]).animate({ top: "0px" }, 1000);
  }

  var timer = setInterval(() => {
    playSlide();
  }, 2000);
});
