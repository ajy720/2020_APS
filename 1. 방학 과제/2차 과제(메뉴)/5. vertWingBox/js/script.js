$(document).ready(() => {
  $("nav>ul.gnb>li").hover(
    function () {
      $(this).find("ul.sub").stop().slideDown("slow");
      console.log("Down");
    },
    function () {
      $(this).find("ul.sub").stop().slideUp("fast");
      console.log("UP");
    }
  );
});
