$(window).ready(function () {
  $(".gnb").hover(
    function () {
      $(".sub, .nav_bg").stop().slideDown();
    },
    function () {
      $(".sub, .nav_bg").stop().slideUp();
    }
  );

  var slide = $(".slide li");
  var n = 0;

  function playSlide() {
    $(slide[n]).animate(
      {
        left: "1200px",
      },
      2000,
      function () {
        $(this).css({ left: "-1200px" });
      }
    );

    n++;

    if (n > 2) n = 0;

    $(slide[n]).animate({ left: "0" }, 2000);
  }

  playSlide();
  var timer = setInterval(() => {
    playSlide();
    console.log("slide");
  }, 4000);
});
