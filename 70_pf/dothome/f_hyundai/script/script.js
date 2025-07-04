$(function(){
    $(".notice li:first").click(function(){
        $(".modal").show();
    });

    $(".popup a").click(function(){
        $(".modal").hide();
    });
});