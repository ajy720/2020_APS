$(document).ready(()=>{
    $("ul.gnb>li").hover(()=>{
        $("ul.sub").stop().slideDown()
    }, ()=>[
        $("ul.sub").stop().slideUp()
    ])
})