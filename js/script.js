$("document").ready(function(){
    
    $(".menuicon").click(500,function(){
        $(".menuicon").fadeToggle(100, function(){
            $(".nav").slideToggle();

        });      
    })

    $(".nav").click(function(){
        $(this).slideToggle();
        $(".menuicon").css("transform","scale(1)");
        $(".menuicon").toggle();
    });
})

