$(window).ready(()=>{
    $("ul.gnb > li").hover(()=>{
        $(this).find("ul.sub").stop().slideDown();
    }, ()=>{
        $(this).find("ul.sub").stop().slideUp();
    })
})