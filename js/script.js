$("document").ready(function(){
    
    $(".menuicon").click(500,function(){
        $(".menuicon").fadeToggle(100, function(){
            $(".nav").toggle("slide", {direction:'right'});
            

        });      
    })

    $(".nav").click(500, function(){
        $(this).toggle("slide",{direction:"right"},500, function(){
            $(".menuicon").fadeToggle();
        });
    });
       
})
