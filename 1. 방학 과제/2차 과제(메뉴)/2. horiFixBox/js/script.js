$(window).ready(function () {
  $(".gnb").hover(
    function () {
      $(".sub, .nav_bg").stop().slideDown();
    },
    function () {
      $(".sub, .nav_bg").stop().slideUp();
    }
  );
});
