$("document").ready(function(){
    
    $(".menuicon").click(function(){
        $(".menuicon").css("transform","scale(1.2)");
        $(".nav").slideToggle();
    
    })

    $(".nav").click(function(){
        $(this).slideToggle();
        $(".menuicon").css("transform","scale(1)");
    });
})