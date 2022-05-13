$("document").ready(function(){
    
    $(".menuicon").click(500,function(){
        $(".menuicon").fadeToggle(100, function(){
            $(".nav").slideToggle();

        });      
    })

    $(".nav").click(500, function(){
        $(this).slideToggle(500, function(){
            $(".menuicon").fadeToggle();
        });
    });
       
})
