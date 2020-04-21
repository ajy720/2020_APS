$(document).ready(function () {
  $("ul.gnb>li").hover(
    function () {
      $(this).find("ul.sub").stop().slideDown();
      console.log("Down");
    },
    function () {
      $(this).find("ul.sub").stop().slideUp();
      console.log("UP");
    }
  );
});
