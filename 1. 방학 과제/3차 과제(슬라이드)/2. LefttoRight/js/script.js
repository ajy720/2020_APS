$(window).ready(()=>{
    $(".gnb").hover(()=>{
        $(".sub, .nav_bg").show()
    }, ()=>{
        $(".sub, .nav_bg").hide()
    })
})