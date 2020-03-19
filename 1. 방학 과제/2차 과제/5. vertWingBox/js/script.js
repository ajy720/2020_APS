$(document).ready(()=>{
    $("ul.gnb>li").hover(()=>{
        $(this).find("ul.sub").stop().slideDown()
        console.log("Down")
    }, ()=>{
        $(this).find("ul.sub").stop().slideUp()
        console.log("UP")
    })
})